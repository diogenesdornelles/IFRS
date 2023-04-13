a: int = 0
b: int = 0
c: int = 0
major: int
medium: int
minor: int
while not(a != b != c):
    a = int(input("Informe 1º número: "))
    b = int(input("Informe 2º número: "))
    c = int(input("Informe 3º número: "))

if a > b:
    major: int = a
    minor: int = b
else:
    major = b
    minor = a

if c > major:
    major = c
    if a > b:
        medium = a
        minor = b
    else:
        medium = b
        minor = a

if major > c > minor:
    medium = c

if c < minor:
    minor = c
    if a > b:
        medium = b
    else:
        medium = a

print(minor, medium, major)
