import os

# Directory to save files
output_dir = "C:\\Data\\projects\\adrig\\library-website-static\\library-website\\src\\pages"
os.makedirs(output_dir, exist_ok=True)

# Template for the React code
react_template = """\
import React from "react";

const Page = () => {{
  return <div>This is page {page_no}</div>;
}};

export default Page;
"""

# Generate files with the appropriate page number
for i in range(1, 109):
    file_name = f"{i:03}.jsx"  # Generates names like 001.jsx, 002.jsx, ...
    file_content = react_template.format(page_no=i)
    with open(os.path.join(output_dir, file_name), "w") as file:
        file.write(file_content)

print(f"React files have been generated in the '{output_dir}' directory.")
