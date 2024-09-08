import { GrUserExpert } from "react-icons/gr";
import { TbBoxModel2 } from "react-icons/tb";
import { MdAssessment } from "react-icons/md";
import { AiOutlineDeploymentUnit } from "react-icons/ai";
import { AiOutlineRobot } from "react-icons/ai";
import { GrIntegration } from "react-icons/gr";

export const Services = [
    {
        Title: 'Providing expert advice',
        Desc: `Offering guidance on AI strategy, technology selection, and implementation.`,
        Icon: <GrUserExpert />,
        Delay: 0
    },
    {
        Title: 'Needs assessment',
        Desc: ` Identifying client's specific AI requirements and goals.Feasibility studies: Evaluating the potential benefits
         and challenges of AI projects.`,
        Icon: <MdAssessment />,
        Delay: 0.2
    },
    {
        Title: 'Creating custom models',
        Desc: `Building AI models tailored to specific client needs (e.g., image recognition, natural language processing, 
        predictive analytics).`,
        Icon: <TbBoxModel2 />,
        Delay: 0.4
    },
    {
        Title: 'Deployment',
        Desc: 'Assisting clients in integrating models into their systems.',
        Icon: <AiOutlineDeploymentUnit />,
        Delay: 0.6
    },
    {
        Title: 'Building AI-powered tools',
        Desc: `Developing applications or software that leverage AI capabilities.`,
        Icon: <AiOutlineRobot />,
        Delay: 0.8
    },
    {
        Title: 'Integrating AI features',
        Desc: ` Incorporating AI functionalities into existing products or services`,
        Icon: <GrIntegration />,
        Delay: 1
    }
]