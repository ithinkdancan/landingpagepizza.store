import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import * as styles from "./index.module.css"

const PIZZA_URL = "https://retail.staging.heb.com/pizza?setPreview=9868"

const CATEGORIES = [
  {
    title: "Pizzas",
    bg: "bgCreamsicle",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=400&fit=crop&q=80",
  },
  {
    title: "Wings",
    bg: "bgCottonCandy",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=400&fit=crop&q=80",
  },
  {
    title: "Sides",
    bg: "bgPistachio",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=400&fit=crop&q=80",
  },
  {
    title: "Drinks",
    bg: "bgFadedJeans",
    image:
      "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&h=400&fit=crop&q=80",
  },
  {
    title: "Desserts",
    bg: "bgLavender",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop&q=80",
  },
]

const FEATURED_ITEMS = [
  {
    id: 1,
    name: "Pepperoni Lover's",
    description: "Loaded with pepperoni on every slice",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
  },
  {
    id: 2,
    name: "BBQ Chicken",
    description: "Smoky BBQ sauce, grilled chicken, red onion",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
  },
  {
    id: 3,
    name: "Margherita",
    description: "Fresh mozzarella, tomato, basil",
    price: 13.99,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
  },
  {
    id: 4,
    name: "Meat Supreme",
    description: "Sausage, pepperoni, bacon & ham",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=80",
  },
  {
    id: 5,
    name: "Veggie Garden",
    description: "Bell peppers, mushrooms, olives & more",
    price: 13.49,
    image:
      "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?w=400&q=80",
  },
]

const IndexPage = () => (
  <Layout>
    <SEO title="Lone Star Slice" />

    {/* Hero */}
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1376&h=400&fit=crop&q=80")`,
      }}
    >
      <div className={styles.heroContent}>
        <h1 className={styles.heroHeading}>
          Marketing landing page
        </h1>
        <p className={styles.heroSubheading}>
          Delivery or carryout — ready when you are.
        </p>
        <a href={PIZZA_URL} className={styles.heroCta}>
          Start Your Order
        </a>
      </div>
    </section>

    <div className={styles.overlay}>
      <span className={styles.overlayLabel}>static content</span>
    </div>
  </Layout>
)

export default IndexPage
