import argparse

parser = argparse.ArgumentParser(description="Demo of argparse")
parser.add_argument("name", help="Your name")
parser.add_argument("--age", type=int, help="Your age")

args = parser.parse_args()

print(f"Hello {args.name}!")
if args.age:
    print(f"You are {args.age} years old.")
