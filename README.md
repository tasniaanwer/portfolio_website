# Portfolio Website

A modern, responsive portfolio website built with React. Features a clean design, smooth navigation, and sections for showcasing skills, projects, and contact information.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Interactive Navigation**: Fixed header with smooth scrolling to sections
- **Skills Showcase**: Animated progress bars for different skill categories
- **Project Gallery**: Showcase your best work with project cards
- **Contact Form**: Functional contact form for potential clients/employers
- **Social Links**: Easy access to your social media and professional profiles

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal introduction and key statistics
3. **Skills**: Technical skills organized by category with progress indicators
4. **Projects**: Featured projects with descriptions and links
5. **Contact**: Contact form and contact information
6. **Footer**: Additional links and social media connections

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Customization

### Personal Information

Update the following files with your personal information:

1. **src/components/Hero.js**: Change name, title, and description
2. **src/components/About.js**: Update the about text and statistics
3. **src/components/Skills.js**: Modify skills and proficiency levels
4. **src/components/Projects.js**: Replace with your actual projects
5. **src/components/Contact.js**: Update contact information
6. **src/components/Footer.js**: Update social links and personal details

### Styling

- Each component has its own CSS file for easy customization
- Global styles are in `src/App.css` and `src/index.css`
- Color scheme can be easily changed by updating CSS custom properties

### Adding New Sections

To add new sections:
1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Update the navigation in `src/components/Header.js`

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

### Deployment Options

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Heroku**: Add buildpack for static sites

## Technologies Used

- React 18
- CSS3 with Flexbox and Grid
- Responsive Design
- Modern JavaScript (ES6+)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to fork this project and submit pull requests for any improvements.