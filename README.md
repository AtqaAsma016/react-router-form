# Web3 Shopping Cart

A modern, decentralized e-commerce platform built with React, React Router, and blockchain integration using MetaMask wallet connectivity. This project demonstrates a full-stack Web3 application with product management, shopping cart functionality, and BNB (Binance Coin) payment integration.

## Features

✨ **Core Features:**
- 🛒 Full-featured shopping cart with product filtering
- 🔗 MetaMask wallet integration for Web3 connectivity
- 💰 BNB (Binance Coin) pricing and payment support
- 📱 Fully responsive design with modern UI
- 🎨 Clean, minimal web3-inspired styling
- ✅ Contact form with validation
- 📊 Product management with stock tracking

✨ **Technical Features:**
- ⚡ React Router v7 with nested routing
- 🎯 React Hooks for state management
- 🌐 Native Web3 API integration (window.ethereum)
- 📦 Optimized build (76.6 kB gzipped)
- 🔒 Clean, maintainable component structure

## Tech Stack

- **Frontend:** React 19.2, React Router 7.13, CSS3
- **Styling:** Space Grotesk font, responsive grid layouts
- **Web3:** Native Ethereum provider (MetaMask)
- **Build:** Create React App, Webpack
- **Version Control:** Git

## Project Structure

```
react-router-form/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home.js / Home.css          # Landing page with features
│   │   ├── Store.js / Store.css        # Product listing & filtering
│   │   ├── ProductCard.js / ProductCard.css  # Individual product display
│   │   ├── Cart.js / Cart.css          # Shopping cart summary
│   │   ├── About.js / About.css        # About the platform
│   │   └── Contact.js / Contact.css    # Contact form
│   ├── App.js / App.css                # Main app with routing & wallet
│   └── index.js                        # React entry point
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MetaMask browser extension

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/react-router-form.git
   cd react-router-form
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   The app opens at `http://localhost:3000`

### Building for Production

```bash
npm run build
```
Creates an optimized production build in the `build/` folder.

## Usage

### Navigation
- **Home:** Welcome screen with feature highlights
- **Store:** Browse products with category filtering
- **Cart:** View cart items and proceed to checkout
- **About:** Learn about the Web3 Shopping Cart
- **Contact:** Send a message to the support team

### Connect Wallet
1. Click the **"Connect Wallet"** button in the header
2. Approve the MetaMask popup
3. Your wallet address appears on the button
4. Once connected, you can proceed with purchases

### Add Products to Cart
1. Navigate to the Store page
2. Browse available products (filter by category if needed)
3. Click **"ADD TO CART"** on any product
4. View your cart count in the header badge
5. Go to Cart page to review and checkout

### Product Details
Each product shows:
- Product name and icon
- Price in BNB (Binance Coin)
- Stock availability
- Category classification

## Page Details

### Store Page
- **Hero Section:** "Store" title with subtitle
- **Filter Bar:** Filter products by category (All, Charity, Digital)
- **Product Grid:** Responsive 3-column layout
- **Toast Notifications:** Confirmation when items are added

### Cart Page
- **Empty State:** Helpful message when cart is empty
- **Cart Items:** List of added products with prices
- **Total Calculation:** Automatic BNB total sum
- **Actions:** Checkout button and Clear Cart option

### Contact Page
- **Form Fields:** Name, Email, Message
- **Validation:** Required fields enforcement
- **Success Banner:** Confirmation after submission
- **Styling:** Focused input states with visual feedback

## Architecture

The app uses a **component-driven architecture:**

1. **App.js** manages global state:
   - Cart items array
   - Wallet connection state
   - Routing configuration

2. **Nested routes** ensure component isolation and clean URL structure

3. **State lifting** to App.js for cart management

4. **Context-ready** for future Redux/Context API implementation

## Web3 Integration

### Wallet Connection
- Uses native `window.ethereum` API (MetaMask injected provider)
- No heavy Web3 libraries for minimal bundle size
- Supports all Ethereum-compatible wallets
- Error handling for missing MetaMask
- Connection state management

### Supported Networks
- Binance Smart Chain (BSC) - recommended for BNB
- Ethereum Mainnet
- Any EVM-compatible chain

## Styling

The project uses a custom CSS design system:
- **Color Palette:** 
  - Primary Orange: `#f97316` (CTAs, accents)
  - Dark: `#111827` (text, headers)
  - Light: `#f5f7fb` (backgrounds)
  - Neutral: `#6b7280` (secondary text)

- **Components:**
  - Rounded cards with soft shadows
  - Smooth hover transitions
  - Responsive grid layouts
  - Mobile-first design

## Available Scripts

```bash
npm start          # Start dev server at localhost:3000
npm build          # Build for production
npm test           # Run tests
npm eject          # Eject from CRA (irreversible)
```

## Performance

- **Bundle Size:** 76.6 kB (gzipped)
- **CSS Size:** 2.35 kB (gzipped)
- **No external CDN dependencies**
- **Optimized image handling**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- MetaMask extension required for Web3 features

## Future Enhancements

- [ ] Implement blockchain transaction functionality
- [ ] Add checkout with smart contract integration
- [ ] Support multiple wallet providers (WalletConnect, Coinbase)
- [ ] Product image uploads
- [ ] Order history tracking
- [ ] Admin dashboard for inventory
- [ ] Dark/Light theme toggle
- [ ] Internationalization (i18n)

## Contributing

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Contact & Support

For questions or support:
- Use the **Contact** page in the app
- Open an issue on GitHub
- Email: support@web3cart.example

## Deployed Links

- **GitHub:** https://github.com/YOUR_USERNAME/react-router-form
- **Live Demo:** (Add deployment link when available)

---

**Made with ❤️ by the Web3 Shopping Cart Team**

*Last Updated: March 2026*
