import os


def rename_images(directory: str) -> None:
    files = os.listdir(directory)


    for i, file in enumerate(files):
        ext = os.path.splitext(file)[1]

        new_name = f"IMG_{str(i+1).zfill(3)}{ext.lower()}"
        os.rename(os.path.join(directory, file), os.path.join(directory, new_name))
        print(f"Renamed {file} to {new_name}")


directories = [
    "AmongUs",
    "Chess",
    "ClosingCeremony",
    "Foyer",
    "GitWorkshop",
    "IceCream",
    "Judging",
    "Karaoke",
    "Lunch",
    "MarioKart",
    "OpeningCeremony",
    "Participants",
    "QuantumComputing",
    "Robotics",
    "SmashBros",
    "Team",
]

for directory in directories:
    rename_images("./public/Gallery/" + directory + "/")
