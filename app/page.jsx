import { Menu } from "../components/basic/Menu"

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center justify-center p-24">
        <Menu> </Menu>
      </main>
      <h3> Guideline for Stage 1 (Launching August 2024)</h3>
      <p> 1. Developing production-ready components focused on AI for university students </p>
      <p> 2. Basic Components are free, open-source, and designed to be taught to students, enabling them to learn ReactJS components, and equipping them with sufficient knowledge to work in production environments. </p>
      <p> 3. Themes are premium UIs made from basic component blocks that can be purchased one-time or through monthly subscription. This pricing structure supports the development and maintenance of high-quality UIs. </p>
      <p> 4. Our team will create YouTube and tutorials to assist students in learning how to code and use these components. </p>
      <p> 5. We offer free adapters that connects to PostgreSQL, FastAPI, HuggingFace and other services. </p>
      <p> 6. We also provide support for AI training and service deployment. </p>
      <p> 7. Only the latest version of Themes will have access to our SaaS, ensuring seamless integration with our AI models and database services while preventing piracy.</p>
      <h3> Guideline for Stage 2 (Launching next year, with a focus on Automated Driving B2B and various B2C clients) </h3>
    </div>
  );
}
