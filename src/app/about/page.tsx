import styles from './About.module.css';

export default function About() {
  return (
    <article className={styles.aboutContainer}>
			<div className={styles.centerContent}>
				<section className={styles.heroSection}>
					<h1 className={styles.header}>Building Digital Success Stories</h1>
					<p>We help ambitious businesses transform their digital presence with beautiful, functional websites that drive real results.</p>
				</section>

				<section className={styles.section}>
					<h2 className={styles.title}>Our Story</h2>
					<p className={styles.ourStory}>At The Launch Market, we understand that every business has unique challenges and aspirations. As a team of passionate designers and developers, we've dedicated ourselves to creating digital solutions that help businesses thrive in the online world. We combine technical expertise with empathetic understanding to deliver websites that not only look beautiful but also drive meaningful results.</p>
				</section>

				<section className={styles.section}>
					<h2 className={styles.title}>Who We Serve</h2>
					<div className={styles.gridContainer}>
						<div className={styles.gridItem}>
							<h3 className={styles.boldFont}>Startups</h3>
							<p>We understand the unique challenges of building a startup. Working with tight deadlines and limited budgets while maintaining laser focus on your goals is no small feat. Our iterative development approach ensures we deliver value efficiently, giving you a reliable partner in your growth journey.</p>
						</div>
						<div className={styles.gridItem}>
							<h3 className={styles.boldFont}>Small Businesses</h3>
							<p>Your time is valuable, and scaling your business requires careful attention to detail. We provide streamlined solutions that help your operations run smoothly, empowering your growth while maintaining the personal touch that makes your business special.</p>
						</div>
						<div className={styles.gridItem}>
							<h3 className={styles.boldFont}>Freelancers</h3>
							<p>As a freelancer, your personal brand is everything. We help you establish a powerful online presence that showcases your expertise and attracts your ideal clients, all while keeping your budget in mind.</p>
						</div>
					</div>
				</section>

				<section className={styles.section}>
					<h2 className={styles.title}>Our Approach</h2>
					<p className={styles.description}>We believe in creating websites that aren't just visually stunning but also drive real business results. Our process combines:</p>
					<div className={styles.gridContainer}>
						<div className={styles.gridItem}>
							<h3 className={styles.boldFont}>User-Centric Design</h3>
							<p>Every pixel serves a purpose. We create intuitive, engaging experiences that keep your customers coming back.</p>
						</div>
						<div className={styles.gridItem}>
							<h3 className={styles.boldFont}>Modern Technology</h3>
							<p>Built with Next.js, TypeScript, and pure CSS, our solutions are fast, secure, and future-proof.</p>
						</div>
						<div className={styles.gridItem}>
							<h3 className={styles.boldFont}>Growth-Focused</h3>
							<p>From SEO to conversion optimization, we build with your business growth in mind.</p>
						</div>
					</div>
				</section>

				<section className={styles.section}>
					<h2 className={styles.title}>Our Values</h2>
					<div className={styles.gridContainer}>
						<div className={styles.gridItem}>
							<h3 className={styles.boldFont}>Quality First</h3>
							<p>We never compromise on the quality of our work, ensuring every project meets our high standards.</p>
						</div>
						<div className={styles.gridItem}>
							<h3 className={styles.boldFont}>Partnership Mindset</h3>
							<p>We see ourselves as an extension of your team, committed to your long-term success.</p>
						</div>
						<div className={styles.gridItem}>
							<h3 className={styles.boldFont}>Innovation & Creativity</h3>
							<p>We constantly push boundaries to deliver fresh, effective solutions for our clients.</p>
						</div>
					</div>
				</section>
			</div>
			
    </article>
  );
}
