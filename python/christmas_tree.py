import time
import sys

# ANSI escape codes for coloring the output
RED = "\033[91m"
YELLOW = "\033[93m"
GREEN = "\033[92m"
RESET = "\033[0m"

# Function to generate the tree data, but without printing it yet


def generate_tree_data(tree_input):
    tree_data = []  # List to store each row of the tree as a string
    star = "* "

    # Loop through the number of rows to create each part of the tree
    for i in range(tree_input):
        color = GREEN if i % 2 == 0 else RED  # Alternates color for each row
        # Append the generated row to the list (with padding for centering)
        tree_data.append(f"{color}{' ' * (tree_input - i - 1)}{star * (i + 1)}{RESET}")

    # Add the trunk to the tree (two rows of three stars)
    trunk_space = " " * (tree_input - 2)
    tree_data.append(trunk_space + f"{GREEN}***{RESET}")
    tree_data.append(trunk_space + f"{GREEN}***{RESET}")

    return tree_data  # Return the list of tree rows

# Function to display a progress bar in the terminal


def progress_bar(progress, total, bar_length=50):
    fraction = progress / total  # Calculate progress as a fraction (0 to 1)
    arrow = '=' * int(fraction * bar_length - 1) + '>'  # Filled part of the bar
    padding = ' ' * (bar_length - len(arrow))  # Empty part of the bar

    # Set the bar color based on the progress percentage
    if fraction <= 0.5:
        color = RED  # First 50% of the bar is red
    elif fraction <= 0.7:
        color = YELLOW  # Between 50% and 70% is yellow
    else:
        color = GREEN  # Above 70% is green

    # Print the bar; \r moves the cursor back to overwrite the line, \n for new line at the end
    end = '\r' if progress < total else '\n'
    print(f'{color}[{arrow}{padding}] {int(fraction * 100)}%{RESET}', end=end)

# Function to simulate the loading process, updating the progress bar


def loading_process(work_items):
    total = len(work_items)  # Total amount of work (each item is a step)

    # Iterate through each step of work
    for i in range(total):
        progress_bar(i + 1, total)  # Update the progress bar for each step
        time.sleep(0.05)  # Simulate a delay to represent "work" being done


# Main execution
tree_height = int(input("Enter your tree height: "))  # Get the user's input for tree height

# 1. Generate the tree data without printing it
tree_data = generate_tree_data(tree_height)

# 2. Show the loading bar while the tree is being "prepared" in the background
loading_process(tree_data)

# 3. Once the loading is complete, print the entire tree
for line in tree_data:
    print(line)  # Now print each row of the tree at once