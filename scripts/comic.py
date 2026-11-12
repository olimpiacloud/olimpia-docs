import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

INK = (14, 23, 38)
BLUE = (47, 127, 232)
WHITE = (255, 255, 255)

SCENES = {
    "banner": ("banner.png", (800, 533)),
    "infra": ("infra.png", (800, 533)),
    "home-agentes": ("home-agentes.png", (512, 768)),
    "home-humanos": ("home-humanos.png", (512, 768)),
}
ICONS = ("anfora", "busto", "columna", "olivo", "teatro", "templo")


def atkinson(v, levels):
    v = v.copy()
    h, w = v.shape
    out = np.zeros((h, w), np.uint8)
    for y in range(h):
        for x in range(w):
            level = int(np.argmin(np.abs(levels - v[y, x])))
            out[y, x] = level
            error = (v[y, x] - levels[level]) / 8
            for dx, dy in ((1, 0), (2, 0), (-1, 1), (0, 1), (1, 1), (0, 2)):
                if 0 <= x + dx < w and y + dy < h:
                    v[y + dy, x + dx] += error
    return out


def tone(gray, solid=None):
    v = np.asarray(gray, np.float32) / 255
    lo, hi = np.percentile(v if solid is None else v[solid], [2, 98])
    return np.clip((v - lo) / max(hi - lo, 0.01), 0, 1)


def scene(photo, size):
    gray = photo.convert("L").filter(ImageFilter.UnsharpMask(radius=16, percent=80, threshold=0))
    level = atkinson(tone(gray.resize(size, Image.LANCZOS)) ** 1.15, np.array([0, 0.5, 1], np.float32))
    out = Image.fromarray(np.array([INK, BLUE, WHITE], np.uint8)[level], "RGB")
    return out.resize((size[0] * 2, size[1] * 2), Image.NEAREST)


def icon(cut, height):
    size = (round(cut.width * height / cut.height), height)
    solid = np.asarray(cut.getchannel("A").resize(size, Image.LANCZOS)) > 110
    level = atkinson(tone(cut.convert("L").resize(size, Image.LANCZOS), solid) ** 1.3, np.array([0, 1], np.float32))
    rim = np.zeros_like(solid)
    rim[1:] |= solid[:-1]
    rim[:-1] |= solid[1:]
    rim[:, 1:] |= solid[:, :-1]
    rim[:, :-1] |= solid[:, 1:]
    rgba = np.zeros((*solid.shape, 4), np.uint8)
    rgba[..., :3] = np.where(((level == 1) & solid)[..., None], WHITE, INK)
    rgba[..., 3] = (rim | solid) * 255
    piece = Image.fromarray(rgba, "RGBA")
    return piece.resize((piece.width * 4, piece.height * 4), Image.NEAREST)


def main(src, out):
    src, out = Path(src), Path(out)
    for name, (file, size) in SCENES.items():
        scene(Image.open(src / file).convert("RGB"), size).save(out / f"{name}.webp", lossless=True, method=6)
        print(name)
    for name in ICONS:
        icon(Image.open(src / "icons" / f"{name}.webp").convert("RGBA"), 48).save(out / f"{name}.webp", lossless=True, method=6)
    card = Image.open(src / "banner.png").convert("RGB")
    card = card.crop((0, (card.height - card.width * 630 // 1200) // 2, card.width, (card.height + card.width * 630 // 1200) // 2))
    scene(card, (600, 315)).quantize(4).save(out / "og.png", optimize=True)


main(*sys.argv[1:3])
