import subprocess
import os

video_files = [
    "0124_P01_105_24717_24749_projected_3d.mp4",
    "1129_P06_111_31661_31693_projected_3d.mp4",
    "5629_P35_102_31178_31210_projected_3d.mp4",
    "5630_P35_102_31211_31243_projected_3d.mp4",
    "9846_P22_112_2195_2227_projected_3d.mp4"
]

# Attempt more compatible parameters:
# -profile:v baseline or main ensures a more widely compatible H.264 profile.
# -pix_fmt yuv420p ensures a common pixel format.
# -movflags +faststart helps for web playback.
# -level 3.0 keeps level compatibility broad.
#
# Adjust CRF if needed for quality/size trade-offs.

for infile in video_files:
    name, ext = os.path.splitext(infile)
    outfile = f"{name}_converted.mp4"

    cmd = [
        "ffmpeg",
        "-i", infile,
        "-c:v", "libx264",
        "-profile:v", "baseline",   # Try "baseline" first; if that doesn't work, try "main"
        "-level", "3.0",
        "-pix_fmt", "yuv420p",
        "-crf", "23",
        "-preset", "medium",
        "-c:a", "aac",
        "-b:a", "128k",
        "-movflags", "+faststart",
        "-y", outfile
    ]

    print(f"Converting {infile} to {outfile}...")
    subprocess.run(cmd, check=True)
    print(f"Done converting {infile}.")

print("All files have been processed.")
