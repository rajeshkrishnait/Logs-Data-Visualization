Logs Data Visualization

A log visualization dashboard that provides real-time log streaming, tabular data representation, interactive charts, and theme switching (light/dark mode).

🚀 Live Demo

🔗 Logs Data Visualization

📌 Features

1️⃣ Log Stream (WebSocket Simulation)

Simulated WebSocket stream to visualize real-time log data.

Controls to pause and clear the stream.

2️⃣ Interactive Table

Displays logs with filtering, pagination, and sorting.

Fully customizable columns (edit, hide, reorder).

3️⃣ Charts for Log Insights

Various Recharts visualizations, including:

Bar Chart - Log level distribution

Line Chart - Response time trends

Pie Chart - Status code occurrences

Area Chart - Time-based response analysis

Scatter Chart - Status codes vs response time

Radar Chart - Service usage overview

4️⃣ Theming (Light/Dark Mode)

Integrated theme switcher in the header.

Dark mode features a deep blue color scheme.

🛠️ Tech Stack

Frontend: React, TypeScript

UI Library: Material-UI (MUI)

Charts: Recharts

State Management: React Context API

Styling: CSS Modules

💂️ Project Structure

📆 src  
 ┣ 📂 assets          # Images, icons, and other static files  
 ┣ 📂 components      # UI components (Header, Table, Charts, etc.)  
 ┣ 📂 context         # ThemeContext for theme switching  
 ┣ 📂 data            # Dummy data generator for logs  
 ┣ 📂 pages           # Main pages (Home, Stream, Table, Charts)  
 ┣ 📂 styles          # CSS files for styling  
 ┣ 📄 App.tsx         # Root component  
 ┣ 📄 main.tsx        # Application entry point  
 ┗ 📄 index.tsx       # React DOM render  

🚀 Getting Started

1️⃣ Clone the Repository

git clone https://github.com/rajeshkrishnait/Logs-Data-Visualization.git
cd Logs-Data-Visualization

2️⃣ Install Dependencies

npm install

3️⃣ Start the Development Server

npm run dev

Open in browser: http://localhost:5173 (Vite default port)

🛠️ Customization & Improvements

Enhance the log stream by integrating a real WebSocket source.

Add log search functionality in the stream view.

Improve data filtering with advanced filters.

📝 License

This project is open-source and available under the MIT License.

