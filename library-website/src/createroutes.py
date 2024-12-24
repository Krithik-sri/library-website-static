import os

# Base React code with placeholders for imports and routes
base_code = """\
import React from 'react';
import {{ BrowserRouter as Router, Routes, Route }} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PagesList from './PagesList';
{imports}
import './styles.css';

const App = () => {{
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={{<PagesList />}} />
        {routes}
      </Routes>
    </Router>
  );
}};

export default App;
"""

# Generate import statements and routes
imports = []
routes = []
for i in range(1, 109):
    page_number = f"{i:03}"  # Format as 001, 002, etc.
    imports.append(f"import Page{page_number} from './pages/{page_number}';")
    routes.append(f"<Route path='/page/{page_number}' element={{<Page{page_number} />}} />")

# Combine imports and routes into the base code
final_code = base_code.format(imports="\n".join(imports),routes="\n".join(routes))

# Output directory and file name
output_dir = "C:\\Data\projects\\adrig\\library-website-static\\library-website\\src"
os.makedirs(output_dir, exist_ok=True)
output_file = os.path.join(output_dir, "App.jsx")

# Write the final code to a file
with open(output_file, "w") as file:
    file.write(final_code)

output_file
