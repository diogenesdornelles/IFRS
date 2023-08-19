lines: list = []

for _ in range(3):
    line = input()
    lines.append(line)

columns: list = [line.split(' ') for line in lines]

titans_sizes: list[dict[str, int]] = [
    {'P': int(columns[2][0])},
    {'M': int(columns[2][1])},
    {'G': int(columns[2][2])},
]

wall_heigth: int = int(columns[0][1])

titan_attack_queue: list[str] = list(columns[1][0])


class Wall:
    def __init__(self, height: int) -> None:
        self.height = height

    def lose_height(self, damage: int) -> None:
        self.height -= damage


class Titan:
    def __init__(self, _type: str, height: int) -> None:
        self.type = _type
        self.height = height
        self.isAlive = True

    def attack(self, wall: Wall) -> None:
        if self.height <= wall.height:
            self.isAlive = False
            wall.lose_height(self.height)


class Titans:
    def __init__(self) -> None:
        self.alives: list = []

    def make(self, _type: str, height: int) -> None:
        titan: Titan = Titan(_type, height)
        self.add(titan)

    def add(self, titan: Titan) -> None:
        self.alives.append(titan)


class Walls:
    def __init__(self):
        self.built: list = []

    def build(self):
        wall: Wall = Wall(wall_heigth)
        self.add(wall)

    def add(self, wall: Wall):
        self.built.append(wall)


walls: Walls = Walls()

for _ in range(1):
    walls.build()

titans: Titans = Titans()


def create_attack_titan(queue: list[str]):
    for member in queue:
        for size in titans_sizes:
            if member in size:
                height = size[f'{member}']
                titans.make(member, height)


create_attack_titan(titan_attack_queue)

for titan in titans.alives:
    last_index = 0
    while titan.isAlive:
        for index, wall in enumerate(walls.built):
            if index >= last_index:
                titan.attack(wall)
                last_index = index + 1
        if titan.isAlive:
            walls.build()


print(len(walls.built))

lines: list[str] = []
for _ in range(10):
    lines.append(int(input()))

lines = [1 if el <= 0 else el for el in lines if el > 0]

for i, v in enumerate(lines):
    print(f"X[{i}] = {v}")
