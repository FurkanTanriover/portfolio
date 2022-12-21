interface SanityBody{
    _createdAt: string;
    _rev: string;
    _id: string;
    _updatedAt: string;
}

interface Image{
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface Social extends SanityBody{
    _type: "social";
    title: string;
    url: string;

}

export interface Experience extends SanityBody{
    _type: "experience";
    jobTitle: string;
    company: string;
    companyImage: Image;
    dateStarted: string;
    dateEnded: string;
    isCurrentlyWorkingHere: boolean;
    points: string[];
    technologies: Technology[];
}

export interface PageInfo extends SanityBody{
    _type: "pageInfo";
    address: string;
    email: string;
    phone: string;
    name: string;
    backgroundInformation: string;
    role: string;
    heroImage: Image;
    profilePic: Image;
}

export interface Technology extends SanityBody{
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Skill extends SanityBody{
    _type: "skill";
    image: Image;
    progress: number;
    title: string;
}

export interface Project extends SanityBody{
    _type: "project";
    title: string;
    image: Image;
    linkToBuild: string;
    summarty: string;
    technologies: Technology[];
}