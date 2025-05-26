<script setup lang="ts">
import { ref } from 'vue'

interface Skill {
  name: string
  description: string
}

interface SkillCategory {
  name: string
  skills: Skill[]
}
// add to skills section for hover:                 @mouseenter="handleSkillHover(skill)" and @mouseleave="handleSkillHover(null)"

const skillCategories = ref<SkillCategory[]>([
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Java', description: 'Enterprise application development with Spring Boot' },
      { name: 'Python', description: 'Data processing, ML pipelines, and backend development' },
      { name: 'TypeScript', description: 'Type-safe web development and Node.js applications' },
      { name: 'JavaScript', description: 'Frontend and full-stack web development' },
      { name: 'Scala', description: 'Big data processing and functional programming' },
      { name: 'C++', description: 'Systems programming and performance-critical applications' },
      { name: 'SQL', description: 'Database querying and data manipulation' },
    ],
  },
  {
    name: 'Front-end Technologies',
    skills: [
      {
        name: 'Vue',
        description: 'Modern reactive web applications with Vue 3 and Composition API',
      },
      { name: 'React', description: 'Component-based UIs and single-page applications' },
      { name: 'Angular', description: 'Enterprise-scale web applications' },
    ],
  },
  {
    name: 'Database Systems',
    skills: [
      { name: 'DynamoDB', description: 'NoSQL database for scalable cloud applications' },
      { name: 'PostgreSQL', description: 'Relational database for complex data relationships' },
      { name: 'MongoDB', description: 'Document-based NoSQL database for flexible schemas' },
    ],
  },
  {
    name: 'Data Science & Machine Learning',
    skills: [
      { name: 'Apache Spark', description: 'Distributed data processing and analytics' },
      { name: 'Databricks', description: 'Unified analytics platform for big data and ML' },
      { name: 'ETL', description: 'Data pipeline design and implementation' },
    ],
  },
  {
    name: 'Cloud Technologies',
    skills: [
      { name: 'Lambda', description: 'Serverless compute service for event-driven applications' },
      { name: 'ECS', description: 'Container orchestration and management' },
      { name: 'EC2', description: 'Virtual servers in the cloud' },
      { name: 'Batch', description: 'Batch computing workloads' },
      {
        name: 'Step Functions',
        description: 'Visual workflow service for application coordination',
      },
      { name: 'Docker', description: 'Container platform for application packaging' },
      { name: 'Azure Suite', description: 'Microsoft cloud services and solutions' },
    ],
  },
  {
    name: 'DevOps & Version Control',
    skills: [
      { name: 'Terraform', description: 'Infrastructure as code for cloud resources' },
      { name: 'Vercel', description: 'Frontend deployment and hosting platform' },
      { name: 'GitLab', description: 'Complete DevOps platform' },
      { name: 'Harness', description: 'Continuous delivery as a service' },
      { name: 'CI/CD', description: 'Automated testing and deployment pipelines' },
      { name: 'GitHub', description: 'Code hosting and collaboration platform' },
      { name: 'Linux Command Line', description: 'System administration and automation' },
    ],
  },
])

const activeSkill = ref<Skill | null>(null)

const handleSkillHover = (skill: Skill | null) => {
  activeSkill.value = skill
}
</script>

<template>
  <div class="engineering-view">
    <!-- Hero Section -->
    <img
      src="/engineering-hero.jpg"
      alt="Engineering workspace"
      class="w-full h-[300px] object-cover"
    />
    <section class="bg-pale-orange-l3 bg-opacity-50">
      <div class="container mx-auto px-4 py-16">
        <h1
          class="text-black text-4xl md:text-6xl font-bold bitter-paragraph max-w-4xl mx-auto text-center"
        >
          <b>Software Engineer</b> with 4 years of experience, specializing in big data, cloud
          technologies, and full-stack development.
        </h1>
      </div>
    </section>

    <!-- Placekey Section -->
    <section class="project-section py-16 bg-pale-orange">
      <div class="container mx-auto px-4">
        <div class="flex w-full">
          <a href="https://www.placekey.io" target="_blank" class="w-4/5">
            <h2 class="text-4xl font-bold mb-8 young-serif-regular">
              Placekey - Founding Engineer
            </h2>
          </a>
          <h3 class="text-right w-1/5 mt-2 young-serif-regular">May 2024 - March 2025</h3>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="project-description">
            <p class="text-xl mb-4 bitter-paragraph">
              A universal location identifier system that simplifies the process of working with
              location data across different platforms and formats.
            </p>
            <ul class="list-disc list-inside text-lg bitter-paragraph">
              <li>
                Led front-end and feature development as part of a 3 person engineering team
                leveraging machine learning and Apache Spark to match large-scale address datasets
              </li>
              <li>
                Spearheaded the Joined Data Project, enabling users to merge proprietary data with
                public datasets (e.g., Overture, National Provider Identifier), driving a 25%
                monthly increase in the 70+ monthly active users
              </li>
              <li>
                Collaborated with the Real Estate Standards Organization to enrich Placekey API
                responses with real estate data, facilitating market expansion and onboarding 9 new
                clients
              </li>
              <li>
                Designed human-in-the-loop agentic systems with Bedrock and OpenAI APIs to automate
                workflows such as SEO content generation, client email handling, and multi-gigabyte
                data cleaning
              </li>
              <li>
                Built a bug triage system using React and Elasticsearch, reducing contractor
                data-matching time by 8x
              </li>
              <li>
                Redesigned and rebuilt the
                <a href="https://dev.placekey.io/" target="_blank" class="text-blue-500 w-4/5"
                  >user dashboard</a
                >
                with Vue.js, enhancing onboarding, metrics visibility, and access to free datasets
                resulting in a 100% increase in active users
              </li>
              <li>
                Built parallelized data processing and cleaning scripts in Python and Scala and
                developed features for ETL pipelines for large-scale data workflows
              </li>
            </ul>
          </div>
          <div class="video-container aspect-video bg-pale-orange-d1">
            <!-- Video placeholder -->
            <div class="w-full h-full flex items-center justify-center bitter-paragraph">
              <span class="text-xl text-gray-600">Video Demo Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AWS Section -->
    <section class="project-section bg-pale-orange-d2 py-16">
      <div class="container mx-auto px-4">
        <div class="flex w-full">
          <a href="https://aws.amazon.com/" target="_blank" class="w-4/5">
            <h2 class="text-4xl font-bold mb-8 young-serif-regular">
              Amazon Web Services - Software Engineer
            </h2>
          </a>
          <h3 class="text-right w-1/5 mt-4 young-serif-regular">August 2021 - March 2024</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="video-container aspect-video bg-pale-orange-d1">
            <!-- Video placeholder -->
            <div class="w-full h-full flex items-center justify-center">
              <span class="text-xl text-gray-600 bitter-paragraph">Video Demo Coming Soon</span>
            </div>
          </div>
          <div class="project-description">
            <p class="text-xl mb-4 bitter-paragraph">
              An engineering team centered around data center capacity planning, helping AWS
              hardware procurement teams optimize server supply chain decisions through predictive
              simulations and maintenance of source-of-truth data.
            </p>
            <ul class="list-disc list-inside text-lg bitter-paragraph">
              <li>
                Owned a key microservice simulating big data simulating what-if scenarios, enabling
                reliability and availability in core AWS services
              </li>
              <li>
                Redesigned and rebuilt the dataflow of the simulation system, cutting system
                failures by 40%
              </li>
              <li>
                Built AWS-native, serverless architectures (including Lambda, CloudFormation, and
                CloudWatch) supporting precise, data-driven supply chain decisions on billion-dollar
                hardware investments
              </li>
              <li>
                Automated the CI/CD pipeline, including latency/error monitoring, rollback
                mechanisms, and ticketing on failures, saving developers 150 hours per year
              </li>
              <li>
                Designed and delivered a critical feature to serve as the source of truth for
                configuration data and distribute it to consuming systems
              </li>
              <li>
                Mentored interns and new hires, and drove engineering best practices through
                comprehensive documentation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Pavlov's Budgeter Section -->
    <section class="project-section bg-gray-50 py-16 bg-pale-orange">
      <div class="container mx-auto px-4">
        <div class="flex w-full">
          <a href="https://www.google.com" target="_blank" class="w-4/5">
            <h2 class="text-4xl font-bold mb-8 young-serif-regular">Pavlov's Budgeter - Founder</h2>
          </a>
          <h3 class="text-right w-1/5 mt-2 young-serif-regular">March 2025 - Present</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="project-description">
            <p class="text-xl mb-4 bitter-paragraph">
              A behavioral economics-based budgeting application that helps users develop better
              financial habits through positive reinforcement and automated tracking.
            </p>
            <ul class="list-disc list-inside text-lg bitter-paragraph">
              <li>Built with AWS Lambda, S3, DynamoDB, Gemini, and React Native</li>
              <li>
                Real-time transaction processing used to bring awareness to user's spending behavior
              </li>
            </ul>
          </div>
          <div class="video-container aspect-video bg-pale-orange-d1">
            <!-- Video placeholder -->
            <div class="w-full h-full flex items-center justify-center">
              <span class="text-xl text-gray-600 bitter-paragraph">Video Demo Coming Soon</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="skills-section bg-pale-orange-l3 py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold mb-12 text-center young-serif-regular">Technical Skills</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="category in skillCategories" :key="category.name" class="skill-category">
            <h3 class="text-2xl font-semibold mb-4 young-serif-regular">{{ category.name }}</h3>
            <div class="space-y-2">
              <div
                v-for="skill in category.skills"
                :key="skill.name"
                class="skill-item relative p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
              >
                <span class="text-lg bitter-paragraph">{{ skill.name }}</span>
                <div
                  v-if="activeSkill === skill"
                  class="skill-tooltip absolute left-0 top-full mt-2 p-3 bg-pale-orange rounded-lg shadow-lg z-100 w-64"
                >
                  <p class="text-sm bitter-paragraph">{{ skill.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.engineering-view {
  background-color: var(--color-white);
}

.project-section {
  scroll-margin-top: 2rem;
}

.skill-item {
  cursor: pointer;
  position: relative;
}

.skill-tooltip {
  pointer-events: none;
}

@media (max-width: 768px) {
  .skill-tooltip {
    width: 100%;
    left: 0;
    transform: none;
  }
}
</style>
