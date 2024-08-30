const ResearchINFO = {
    main: {
        title: "Accelerating AI Systems and Solutions Holistically.",
        section1: {
            whole: "AI Algorithms",
            area1: "Natural Language Processing",
            area2: "Computer Vision",
        },
        section2: {
            whole: "AI Solutions",
        },
        section3: {
            whole: "AI Systems",
        },
        section4: {
            whole: "AI Accelerators",
        },
        section5: {
            whole: "AI Security",
        },
        section6: {
            whole: "AI Development Tools",
        },
    },
    section1: {
        area1: [
            {
                paper: "Measuring Fine-Grained Domain Relevance of Terms: A Hierarchical Core-Fringe Approach",
                img: "s1_a1_p1.png",
                conf: "ACL-IJCNLP 2021",
                description: "We introduce and study the fine-grained domain relevance of terms– an important property of terms that has not been carefully studied before. We propose a hierarchical core-fringe domain relevance learning approach, which can cover almost all terms in human languages and various domains, while requires little or even no human annotation.",
                link: "https://aclanthology.org/2021.acl-long.282.pdf",
            },
            {
                paper: "Exploring Semantic Capacity of Terms",
                img: "s1_a1_p1.png",
                conf: "EMNLP 2020",
                description: "We explore semantic capacity of terms. We first introduce the definition of semantic capacity and propose the semantic capacity as sociation hypothesis. After that, we propose a two-step model to investigate semantic capacity of terms, which consists of the of fline construction and the online query processes. The offline construction process places domain-specificterms in the hyperbolic space by our proposed Lorentz model with NPMI, and the online query process deals with user requirements, where semantic capacity is interpreted by norms of embeddings.",
                link: "https://arxiv.org/pdf/2010.01898",
            },
        ],
        area2: [
            {
                paper: "Interpretable Visual Reasoning via Induced Symbolic Space",
                img: "s1_a2_p1.png",
                conf: "ICCV 2021",
                description: "We study the problem of concept induction in visual reasoning, i.e., identifying concepts and their hierarchical relationships from question-answer pairs associated with images; and achieve an interpretable model via working on the induced symbolic concept space. To this end, we first design a new framework named object-centric compositional attention model (OCCAM) to perform the visual reasoning task with object-level visual features. Then, we come up with a method to induce concepts of objects and relations using clues from the attention patterns between objects' visual features and question words. Finally, we achieve a higher level of interpretability by imposing OCCAM on the objects represented in the induced symbolic concept space.",
                link: "https://arxiv.org/pdf/2011.11603",

            },
            {
                paper: "Practical Detection of Trojan Neural Networks: Data-Limited and Data-Free Cases",
                img: "s1_a2_p2.png",
                conf: "ECCV 2020",
                description: "We study the problem of the Trojan network (TrojanNet) detection in the data-scarce regime, where only the weights of a trained DNN are accessed by the detector. We first propose a data-limited TrojanNet detector (TND), when only a few data samples are available for TrojanNet detection. We show that an effective data-limited TND can be established by exploring connections between Trojan attack and prediction-evasion adversarial attacks including per-sample attack as well as all-sample universal attack. In addition, we propose a data-free TND, which can detect a TrojanNet without accessing any data samples.",
                link: "https://arxiv.org/pdf/2007.15802",
            },
        ],
    }
};

export default ResearchINFO;