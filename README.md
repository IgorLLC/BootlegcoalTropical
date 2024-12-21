# Bootleg Coal Website - React Migration

This repository contains the React/Next.js migration of the Bootleg Coal website (bootlegcoal.com). The migration focuses on creating a modern, fast, and maintainable website while preserving the original content and improving the user experience.

## 🚀 Project Structure

```
/app
├── components/
│   └── Navbar.tsx       # Main navigation component
├── blog/
│   ├── components/
│   │   └── BlogNav.tsx  # Blog-specific navigation
│   ├── posts/
│   │   ├── bootleg-coal-miners-and-law/
│   │   ├── bootleg-coal-rebellion/
│   │   └── history-behind-bootleg-coal/
│   └── page.tsx         # Blog main page
├── book/
│   └── page.tsx         # Book details page
├── author/
│   └── page.tsx         # Author information page
└── layout.tsx           # Root layout with shared components
```

## 🔄 Migration Changes

### 1. Framework Migration
- Migrated from WordPress to Next.js 15.1.2
- Implemented React 18.2.0 for modern component architecture
- Added TypeScript support for better type safety
- Integrated Tailwind CSS for styling

### 2. Navigation
- Created a responsive main navigation bar
- Implemented mobile-friendly menu
- Added blog-specific navigation with categories and recent posts

### 3. Pages and Components

#### Home Page
- Redesigned landing page focusing on the book
- Added prominent call-to-action buttons
- Integrated direct purchase links

#### Book Page
- Detailed book information section
- Purchase options (Cornell University Press, Amazon)
- Book reviews and testimonials
- Publication details

#### Blog Section
- Created a modern blog layout
- Implemented category-based navigation
- Added recent posts dropdown
- Created individual blog post templates
- Integrated newsletter signup

#### Author Page
- Author biography section
- Speaking engagements information
- Publication list
- Contact information

### 4. Performance Improvements
- Static page generation for faster loading
- Optimized images with Next.js Image component
- Responsive design for all screen sizes
- Improved SEO structure

## 🛠️ Technical Stack

- **Framework**: Next.js 15.1.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React 18.2.0
- **Markdown Processing**: gray-matter, remark
- **Development Tools**: ESLint, PostCSS

## 📦 Dependencies

```json
{
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "^15.1.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "remark": "^15.0.1",
    "remark-html": "^16.0.1"
  },
  "devDependencies": {
    "@types/node": "22.10.2",
    "@types/react": "19.0.2",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "5.7.2"
  }
}
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bootlegcoal-react.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Content Migration Status

- [x] Home page content
- [x] Book details
- [x] Author information
- [x] Blog posts
- [x] Navigation structure
- [ ] Press section
- [ ] Contact form
- [ ] Image assets

## 🔜 Next Steps

1. Complete the Press section implementation
2. Add contact form functionality
3. Migrate remaining blog posts
4. Implement image optimization
5. Add analytics integration
6. Set up automated deployments

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the ISC License.
