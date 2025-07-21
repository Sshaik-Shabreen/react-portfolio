 import React from "react";
import Section from "./Section";
import SkillItem from "./SkillItem";

// Icons
const icons = {
  python: "https://img.icons8.com/color/48/python.png",
  html5: "https://img.icons8.com/color/48/html-5.png",
  css3: "https://img.icons8.com/color/48/css3.png",
  mysql: "https://img.icons8.com/ios-filled/50/mysql-logo.png",
  postgresql: "https://img.icons8.com/color/48/postgreesql.png",
  shell: "https://img.icons8.com/ios/50/console.png",
  numpy: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
  pandas: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
  opencv: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
  scikit: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  matplotlib: "https://matplotlib.org/_static/images/logo2.svg",
  django: "https://img.icons8.com/officel/40/django.png",
  flask: "https://img.icons8.com/ios-filled/50/flask.png",
  bootstrap: "https://img.icons8.com/color/48/bootstrap.png",
  keras: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
  tensorflow: "https://img.icons8.com/color/48/tensorflow.png",
  pytorch: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pytorch_logo.png",
  git: "https://img.icons8.com/color/48/git.png",
  aws: "https://img.icons8.com/color/48/amazon-web-services.png",
  heroku: "https://img.icons8.com/color/48/heroku.png",
  fastapi: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
};

const Skills = () => {
  return (
    <div className="relative overflow-hidden min-h-screen" id="skills">
      {/* 🌊 Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full z-0"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#14b8a6"
          fillOpacity="0.2"
          d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,149.3C1120,128,1280,128,1360,128L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>

      <div className="relative z-10 p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-teal-700 mb-4">Skills</h1>

        <Section title="Languages and Databases">
          <SkillItem icon={icons.python} label="Python" />
          <SkillItem icon={icons.html5} label="HTML5" />
          <SkillItem icon={icons.css3} label="CSS3" />
          <SkillItem icon={icons.mysql} label="MySQL" />
          <SkillItem icon={icons.postgresql} label="PostgreSQL" />
          <SkillItem icon={icons.shell} label="Shell Scripting" />
        </Section>

        <Section title="Libraries">
          <SkillItem icon={icons.numpy} label="NumPy" />
          <SkillItem icon={icons.pandas} label="Pandas" />
          <SkillItem icon={icons.opencv} label="OpenCV" />
          <SkillItem icon={icons.scikit} label="scikit-learn" />
          <SkillItem icon={icons.matplotlib} label="matplotlib" />
        </Section>

        <Section title="Frameworks">
          <SkillItem icon={icons.django} label="Django" />
          <SkillItem icon={icons.flask} label="Flask" />
          <SkillItem icon={icons.bootstrap} label="Bootstrap" />
          <SkillItem icon={icons.keras} label="Keras" />
          <SkillItem icon={icons.tensorflow} label="TensorFlow" />
          <SkillItem icon={icons.pytorch} label="PyTorch" />
        </Section>

        <Section title="Other">
          <SkillItem icon={icons.git} label="Git" />
          <SkillItem icon={icons.aws} label="AWS" />
          <SkillItem icon={icons.heroku} label="Heroku" />
          <SkillItem icon={icons.fastapi} label="FastAPI" />
        </Section>
      </div>

      {/* 🌊 Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full z-0"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#14b8a6"
          fillOpacity="0.2"
          d="M0,288L80,272C160,256,320,224,480,208C640,192,800,192,960,181.3C1120,171,1280,149,1360,138.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default Skills;
