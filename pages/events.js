import { Layout } from '../components/Layout';
import { Timeline } from '../components/Timeline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

// Fetch Announcements from JSON
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'announcements.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const announcements = JSON.parse(fileContents);

  return {
    props: { announcements }
  };
}

const Events = ({ announcements }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Layout title={'Events'}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="eventheader h-[25vh] md:h-[30vh] text-white relative transition-all duration-300 ease-out"
        >
          <Image
            src={'/assets/women.jpg'}
            alt="Women"
            width={1280}
            height={853}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 bg-black/70 h-full w-full flex flex-col items-center justify-center text-center text-white px-5">
            <h3 className="font-bold uppercase text-xl md:text-3xl tracking-wider">
              Upcoming Events
            </h3>
            <p className="font-bold text-gray-300">
              We invite and welcome you to all of our events. Visit us.
            </p>
          </div>
        </motion.div>

        {/* Announcements Section */}
        <section className="my-6">
          <motion.div
            className="bg-blue-900 text-white p-6  shadow-lg mx-auto max-w-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-semibold text-center mb-4">📢 ANNOUNCEMENT</h2>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-800 p-4 rounded-md shadow-md"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <h3 className="text-lg font-bold">{announcement.title}</h3>
                  <p className="mt-2">{announcement.message}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Timeline Section */}
        <section className="my-5">
          <Timeline />
        </section>
      </Layout>
    </motion.div>
  );
};

export default Events;