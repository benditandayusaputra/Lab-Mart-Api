import dotenv from "dotenv";
import mongoose from "mongoose";
import Product from "./models/Product.js";

dotenv.config();

const MONGODB_URI =
  process.env.MONGO_URI || "mongodb://localhost:27017/toko_online";

const sampleProducts = [
  {
    name: "iPhone 14 Pro Max",
    description:
      "Smartphone premium dengan chip A16 Bionic, kamera 48MP, dan layar Super Retina XDR 6.7 inch",
    price: 18999000,
    category: "Electronics",
    stock: 25,
    imageUrl:
      "https://images.unsplash.com/photo-1678685888221-cda23e62d5ae?w=300&h=300&fit=crop",
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    description:
      "Flagship Samsung dengan S Pen, kamera 200MP, dan processor Snapdragon 8 Gen 2",
    price: 16999000,
    category: "Electronics",
    stock: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=300&h=300&fit=crop",
  },
  {
    name: 'MacBook Pro 14"',
    description:
      "Laptop profesional dengan chip M3 Pro, 16GB RAM, 512GB SSD untuk performa maksimal",
    price: 32999000,
    category: "Electronics",
    stock: 15,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=300&fit=crop",
  },
  {
    name: "Nike Air Jordan 1",
    description:
      "Sepatu sneakers klasik dengan desain ikonik dan kenyamanan premium",
    price: 2499000,
    category: "Fashion",
    stock: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
  },
  {
    name: "Adidas Ultraboost 22",
    description:
      "Sepatu lari dengan teknologi Boost untuk kenyamanan maksimal saat berlari",
    price: 2799000,
    category: "Sports",
    stock: 40,
    imageUrl:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=300&h=300&fit=crop",
  },
  {
    name: "Sony WH-1000XM5",
    description:
      "Headphone noise cancelling terbaik dengan audio berkualitas tinggi dan baterai 30 jam",
    price: 5499000,
    category: "Electronics",
    stock: 35,
    imageUrl:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=300&h=300&fit=crop",
  },
  {
    name: "The Psychology of Money",
    description:
      "Buku bestseller tentang hubungan manusia dengan uang dan investasi",
    price: 125000,
    category: "Books",
    stock: 100,
    imageUrl:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop",
  },
  {
    name: "Atomic Habits",
    description:
      "Panduan praktis untuk membangun kebiasaan baik dan menghilangkan kebiasaan buruk",
    price: 110000,
    category: "Books",
    stock: 80,
    imageUrl:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=300&fit=crop",
  },
  {
    name: "Kopi Arabica Premium 500g",
    description:
      "Biji kopi arabica pilihan dari perkebunan terbaik Indonesia dengan rasa khas",
    price: 150000,
    category: "Food",
    stock: 200,
    imageUrl:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop",
  },
  {
    name: "Yoga Mat Premium",
    description:
      "Matras yoga anti-slip dengan ketebalan 6mm, cocok untuk yoga dan fitness",
    price: 350000,
    category: "Sports",
    stock: 60,
    imageUrl:
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop",
  },
  {
    name: "iPad Air 5th Gen",
    description:
      "Tablet dengan chip M1, layar Liquid Retina 10.9 inch, perfect untuk productivity",
    price: 9999000,
    category: "Electronics",
    stock: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=300&fit=crop",
  },
  {
    name: "Levi's 501 Original Jeans",
    description:
      "Celana jeans klasik dengan kualitas premium dan desain timeless",
    price: 1299000,
    category: "Fashion",
    stock: 75,
    imageUrl:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop",
  },
];

const seedDatabase = async () => {
  try {
    console.log("🌱 Starting database seeding...");
    console.log(`Connecting to: ${MONGODB_URI}`);

    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
    console.log(`Database: ${mongoose.connection.name}`);

    const deleteResult = await Product.deleteMany({});
    console.log(`Cleared ${deleteResult.deletedCount} existing products`);

    const insertedProducts = await Product.insertMany(sampleProducts);
    console.log(
      `Successfully inserted ${insertedProducts.length} sample products`,
    );

    console.log("\n📦 Sample Products Added:");
    insertedProducts.forEach((product, index) => {
      console.log(
        `   ${index + 1}. ${product.name} - Rp ${product.price.toLocaleString(
          "id-ID",
        )}`,
      );
    });

    console.log("\nDatabase seeding completed successfully!");
    console.log("You can now start the server with: npm start\n");

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
