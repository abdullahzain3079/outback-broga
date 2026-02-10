/* =============================================
   Menu Data — OUTBACK Broga Thai Dining
   Based on the restaurant's menu
   ============================================= */

export const menuCategories = [
  {
    id: 'appetizers',
    name: 'Appetizers',
    nameThai: 'อาหารเรียกน้ำย่อย',
    description: 'Start your meal with our delicious Thai appetizers',
    items: [
      { name: 'Thai Spring Rolls', price: 12, description: 'Crispy golden rolls stuffed with vegetables and glass noodles, served with sweet chili sauce', spicy: 0, popular: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80' },
      { name: 'Chicken Satay', price: 15, description: 'Grilled marinated chicken skewers served with peanut sauce and cucumber relish', spicy: 0, popular: true, image: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=600&q=80' },
      { name: 'Fish Cake (Tod Mun Pla)', price: 14, description: 'Thai-style fish cakes with red curry paste, served with cucumber dipping sauce', spicy: 1 },
      { name: 'Prawn Crackers', price: 8, description: 'Crispy prawn crackers served with sweet chili sauce', spicy: 0 },
      { name: 'Thai Corn Cakes', price: 10, description: 'Crispy corn fritters with fresh herbs and sweet chili dip', spicy: 0 },
      { name: 'Chicken Wings', price: 14, description: 'Deep-fried Thai-style chicken wings with fish sauce glaze', spicy: 1, popular: true, image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80' },
    ]
  },
  {
    id: 'soups',
    name: 'Soups',
    nameThai: 'ซุป',
    description: 'Authentic Thai soups bursting with aromatic herbs and spices',
    items: [
      { name: 'Tom Yum Goong', price: 18, description: 'Iconic hot and sour soup with prawns, lemongrass, galangal, kaffir lime and chili', spicy: 2, popular: true, image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80' },
      { name: 'Tom Kha Gai', price: 16, description: 'Creamy coconut soup with chicken, galangal, lemongrass and mushrooms', spicy: 1, popular: true, image: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=600&q=80' },
      { name: 'Clear Soup (Kaeng Jued)', price: 12, description: 'Light clear soup with tofu, minced chicken and glass noodles', spicy: 0 },
      { name: 'Tom Yum Seafood', price: 22, description: 'Spicy and sour mixed seafood soup with Thai herbs', spicy: 2 },
    ]
  },
  {
    id: 'salads',
    name: 'Salads',
    nameThai: 'สลัด',
    description: 'Fresh and vibrant Thai salads with bold flavors',
    items: [
      { name: 'Som Tum (Papaya Salad)', price: 12, description: 'Shredded green papaya with tomatoes, peanuts, dried shrimp and lime dressing', spicy: 2, popular: true, image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80' },
      { name: 'Yum Woon Sen', price: 14, description: 'Glass noodle salad with prawns, minced chicken, celery and onions', spicy: 1 },
      { name: 'Larb Gai', price: 14, description: 'Spicy minced chicken salad with mint, onions and toasted rice powder', spicy: 2, popular: true, image: 'https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&q=80' },
      { name: 'Nam Tok (Waterfall Beef Salad)', price: 18, description: 'Grilled beef slices tossed with herbs, chili and lime juice', spicy: 2 },
    ]
  },
  {
    id: 'curries',
    name: 'Curries',
    nameThai: 'แกง',
    description: 'Rich and aromatic Thai curries made with fresh ingredients',
    items: [
      { name: 'Green Curry (Gaeng Keow Wan)', price: 18, description: 'Classic Thai green curry with chicken, Thai basil, bamboo shoots in coconut milk', spicy: 2, popular: true, image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80' },
      { name: 'Red Curry (Gaeng Daeng)', price: 18, description: 'Aromatic red curry with chicken, bamboo shoots and Thai basil in coconut milk', spicy: 2 },
      { name: 'Massaman Curry', price: 20, description: 'Rich and mild curry with tender beef, potatoes, peanuts and onions', spicy: 1, popular: true, image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80' },
      { name: 'Panang Curry', price: 18, description: 'Thick and creamy curry with chicken, kaffir lime leaves and fresh chili', spicy: 1 },
      { name: 'Yellow Curry', price: 16, description: 'Mild curry with chicken, potatoes and onions in turmeric-spiced coconut milk', spicy: 1 },
    ]
  },
  {
    id: 'stir-fry',
    name: 'Stir-Fry & Wok',
    nameThai: 'ผัด',
    description: 'Wok-tossed dishes with fresh ingredients and bold flavors',
    items: [
      { name: 'Pad Thai', price: 16, description: 'Thailand\'s famous stir-fried rice noodles with prawns, tofu, bean sprouts and peanuts', spicy: 0, popular: true, image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80' },
      { name: 'Pad Kra Pao (Thai Basil)', price: 16, description: 'Stir-fried minced chicken with holy basil, chili and garlic, served with fried egg', spicy: 2, popular: true, image: 'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=600&q=80' },
      { name: 'Pad See Ew', price: 15, description: 'Flat rice noodles stir-fried with chicken, Chinese broccoli and dark soy sauce', spicy: 0 },
      { name: 'Cashew Nut Chicken', price: 16, description: 'Stir-fried chicken with roasted cashews, dried chili and vegetables', spicy: 1 },
      { name: 'Sweet & Sour Chicken', price: 15, description: 'Crispy chicken stir-fried with pineapple, tomatoes, cucumber and peppers', spicy: 0 },
      { name: 'Garlic Pepper Prawns', price: 22, description: 'Fresh prawns stir-fried with garlic, white pepper and coriander root', spicy: 1, popular: true, image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=600&q=80' },
      { name: 'Thai Fried Rice', price: 14, description: 'Wok-fried jasmine rice with egg, vegetables and your choice of protein', spicy: 0 },
    ]
  },
  {
    id: 'seafood',
    name: 'Seafood',
    nameThai: 'อาหารทะเล',
    description: 'Fresh seafood dishes prepared with traditional Thai recipes',
    items: [
      { name: 'Steamed Fish with Lime', price: 28, description: 'Whole steamed fish topped with fresh lime, garlic, chili and coriander', spicy: 2, popular: true, image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80' },
      { name: 'Grilled Prawns', price: 26, description: 'Jumbo prawns grilled to perfection with spicy seafood sauce', spicy: 1 },
      { name: 'Squid with Salted Egg', price: 22, description: 'Crispy squid wok-fried with rich salted egg yolk sauce', spicy: 1, popular: true, image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
      { name: 'Fried Fish with Turmeric', price: 20, description: 'Crispy turmeric-marinated fish served with mango salad', spicy: 0 },
    ]
  },
  {
    id: 'rice-noodles',
    name: 'Rice & Noodles',
    nameThai: 'ข้าวและก๋วยเตี๋ยว',
    description: 'Essential Thai rice and noodle dishes',
    items: [
      { name: 'Steamed Jasmine Rice', price: 4, description: 'Fragrant Thai jasmine rice', spicy: 0 },
      { name: 'Sticky Rice', price: 5, description: 'Traditional Thai glutinous rice', spicy: 0 },
      { name: 'Pineapple Fried Rice', price: 18, description: 'Fried rice served in a pineapple shell with prawns, cashews and raisins', spicy: 0, popular: true, image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80' },
      { name: 'Boat Noodles', price: 14, description: 'Rich and aromatic Thai noodle soup with tender beef slices', spicy: 1 },
      { name: 'Pad Woon Sen', price: 14, description: 'Glass noodles stir-fried with egg, vegetables and soy sauce', spicy: 0 },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    nameThai: 'ของหวาน',
    description: 'Sweet Thai desserts to end your meal perfectly',
    items: [
      { name: 'Mango Sticky Rice', price: 14, description: 'Sweet glutinous rice with fresh ripe mango and coconut cream', spicy: 0, popular: true, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80' },
      { name: 'Thai Tea Ice Cream', price: 10, description: 'Creamy Thai milk tea flavored ice cream', spicy: 0 },
      { name: 'Coconut Ice Cream', price: 10, description: 'Served in a coconut shell with peanuts and corn', spicy: 0 },
      { name: 'Roti with Condensed Milk', price: 8, description: 'Crispy Thai-style roti drizzled with sweetened condensed milk', spicy: 0, popular: true, image: 'https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80' },
      { name: 'Tub Tim Krob', price: 10, description: 'Water chestnuts in coconut milk with crushed ice', spicy: 0 },
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    nameThai: 'เครื่องดื่ม',
    description: 'Refreshing Thai drinks and beverages',
    items: [
      { name: 'Thai Iced Tea', price: 8, description: 'Classic Thai milk tea served over ice', spicy: 0, popular: true, image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&q=80' },
      { name: 'Thai Iced Coffee', price: 8, description: 'Strong Thai coffee with condensed milk over ice', spicy: 0 },
      { name: 'Fresh Coconut', price: 10, description: 'Young coconut served chilled', spicy: 0, popular: true, image: 'https://images.unsplash.com/photo-1544252890-c3e95e867032?w=600&q=80' },
      { name: 'Lemongrass Tea', price: 7, description: 'Aromatic hot lemongrass tea', spicy: 0 },
      { name: 'Butterfly Pea Lemonade', price: 9, description: 'Color-changing butterfly pea flower drink with lemon', spicy: 0 },
      { name: 'Fresh Lime Soda', price: 7, description: 'Sparkling lime soda, sweet or salted', spicy: 0 },
    ]
  }
];

export const festiveMenus = [
  {
    name: 'Family Feast Set A',
    price: 128,
    serves: '4-6 pax',
    items: ['Tom Yum Goong', 'Green Curry Chicken', 'Pad Thai', 'Cashew Nut Chicken', 'Steamed Jasmine Rice', 'Thai Iced Tea (4 glasses)'],
  },
  {
    name: 'Family Feast Set B',
    price: 168,
    serves: '4-6 pax',
    items: ['Tom Kha Gai', 'Massaman Curry Beef', 'Garlic Pepper Prawns', 'Pad Kra Pao', 'Pineapple Fried Rice', 'Mango Sticky Rice', 'Thai Iced Tea (4 glasses)'],
  },
  {
    name: 'Grand Celebration Set',
    price: 258,
    serves: '8-10 pax',
    items: ['Tom Yum Seafood', 'Green Curry Chicken', 'Steamed Fish with Lime', 'Squid with Salted Egg', 'Chicken Satay', 'Som Tum', 'Pad Thai', 'Thai Fried Rice', 'Mango Sticky Rice', 'Fresh Coconut (6)'],
    popular: true,
  },
];
