import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import GitHub from "@/components/GitHub";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";

async function getGitHubStats() {
  try {
    const username = "ana-yet";
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return { repos: 0, forks: 0, stars: 0 };
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    const stars = reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    const forks = reposData.reduce((acc, repo) => acc + repo.forks_count, 0);

    return {
      repos: userData.public_repos,
      forks: forks,
      stars: stars,
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return { repos: 0, forks: 0, stars: 0 };
  }
}

export default async function Home() {
  const { repos, forks, stars } = await getGitHubStats();

  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      {/* <TechStack /> */}
      <Projects />
      <Skills />
      {/* <Experience /> */}
      <GitHub repos={repos} forks={forks} stars={stars} />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  );
}
