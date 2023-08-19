value: float = 123456789012345.0000

arr: list = []

for _ in range(100):
    arr.append(value)
    value = value / 2

for i, v in enumerate(arr):
    print(f"N[{i}] = {v:.5f}")
