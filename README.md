# CampSpotter 🏕️

A platform to discover and share camping locations, specially designed for Pathfinder clubs and outdoor enthusiasts.

## Motivation

Finding suitable camping locations can be challenging. People often spend hours searching on maps or waiting for recommendations. CampSpotter aims to solve this by creating a community-driven platform where users can share and discover camping spots, whether they're institutional facilities or legally permitted areas.

## Features

- 🗺️ **Interactive Map Exploration**

  - [ ] Browse camping locations on an interactive map
  - [ ] Filter by location type (private/public)
  - [ ] Check distance and accessibility

- 📝 **Detailed Information**

  - [ ] Location descriptions and photos
  - [ ] Weather conditions and best seasons
  - [ ] Required permits or permissions
  - [ ] Community reviews and ratings

- ✅ **Personal Tracking**
  - [ ] Mark visited locations
  - [ ] Create camping wishlists
  - [ ] Share experiences and tips
  - [ ] Rate and review spots

## Technologies

- **Frontend:**

  - React.js
  - Next.js
  - Tailwind CSS
  - Mapbox/Google Maps API

- **Development Tools:**
  - Jest for testing
  - Node.js (LTS) + TypeScript for type safety
  - Prettier + EditorConfig for code formatting and consistency

## Getting Started

1. Clone the repository
2. Run docker compose: `docker compose -f infra/compose.yaml up`
3. Install dependencies: `yarn install`
4. Run development server: `yarn dev`
5. Access: `http://localhost:3000`

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
