export interface DayPlan {
  dayNumber: number;
  title: string;
  focus: string;
  topics: string[];
  handsOnLab: string;
  deliverable: string;
}

export interface SyllabusVariant {
  durationLabel: string;
  hours: string;
  recommendedFor: string;
  description: string;
  capstoneTitle: string;
  capstoneDescription: string;
  days: DayPlan[];
}

export type DurationKey = '1day' | '2days' | '3days' | '5days' | '6days';

export interface TrackData {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: 'Artificial Intelligence' | 'Full Stack Engineering' | 'Applied Deeptech' | 'Creative AI & Media' | 'Robotics & Hardware' | string;
  badge: string;
  level: string;
  rating: number;
  reviewsCount: number;
  studentsTrained: string;
  partnerColleges: string;
  heroGradient: string;
  iconName: string;
  image: string;
  overview: string;
  prerequisites: string[];
  toolsAndTech: string[];
  careerRoles: string[];
  learningOutcomes: string[];
  deliveryMode?: 'Offline On-Campus' | 'Offline & On-Campus' | 'Hybrid / Offline' | string;
  defaultDuration?: DurationKey;
  syllabi: {
    '1day'?: SyllabusVariant;
    '2days'?: SyllabusVariant;
    '3days'?: SyllabusVariant;
    '5days'?: SyllabusVariant;
    '6days'?: SyllabusVariant;
    [key: string]: SyllabusVariant | undefined;
  };
}

export const TRACKS_DATA: TrackData[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence & Machine Learning',
    shortTitle: 'AI & ML',
    tagline: 'Master foundational algorithms, neural networks, predictive modeling, and end-to-end ML pipelines.',
    category: 'Artificial Intelligence',
    badge: 'Core Foundation',
    level: 'Beginner to Intermediate',
    rating: 4.94,
    reviewsCount: 3820,
    studentsTrained: '32,000+',
    partnerColleges: '180+',
    heroGradient: 'from-orange-500 to-amber-500',
    iconName: 'BrainCircuit',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=compress&cs=tinysrgb&w=800',
    overview: 'Dive deep into modern machine learning techniques, from exploratory data analysis and supervised/unsupervised algorithms to deep neural networks using PyTorch and Scikit-Learn. Build, train, evaluate, and export real models for predictive applications.',
    prerequisites: ['Basic Python programming knowledge', 'Familiarity with high school mathematics & linear algebra basics'],
    toolsAndTech: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'PyTorch', 'Matplotlib', 'Jupyter Lab', 'FastAPI'],
    careerRoles: ['Junior ML Engineer', 'Data Science Associate', 'Predictive Modeling Specialist', 'AI Research Assistant'],
    learningOutcomes: [
      'Clean, preprocess, and visualize complex real-world datasets with Pandas and Seaborn.',
      'Implement and tune classification, regression, and clustering algorithms.',
      'Build feedforward and convolutional neural networks using PyTorch.',
      'Deploy trained ML models via REST APIs using FastAPI.'
    ],
    syllabi: {
      '3days': {
        durationLabel: '3-Day Fast-Track Workshop',
        hours: '18 Hours (6 hrs / day)',
        recommendedFor: 'Colleges seeking a rapid weekend hack-workshop with immediate project output.',
        description: 'Accelerated introduction to ML foundations, model training, and building a live classification web app.',
        capstoneTitle: 'Automated Loan Risk Prediction System',
        capstoneDescription: 'Trained supervised model deployed as a lightweight REST endpoint that predicts loan approval scores.',
        days: [
          {
            dayNumber: 1,
            title: 'Data Foundations & Exploratory Analysis',
            focus: 'Python for Data Science, Data Wrangling & Feature Engineering',
            topics: [
              'NumPy vectorization & Pandas DataFrame manipulation',
              'Handling missing values, outliers, and categorical encoding',
              'Feature scaling, normalization, and correlation matrices',
              'Data visualization with Matplotlib & Seaborn'
            ],
            handsOnLab: 'Exploratory data analysis on a real-world healthcare and financial dataset.',
            deliverable: 'Interactive Jupyter notebook cleaning and highlighting dataset patterns.'
          },
          {
            dayNumber: 2,
            title: 'Supervised & Unsupervised Machine Learning',
            focus: 'Classification, Regression & Model Evaluation',
            topics: [
              'Linear and Logistic Regression from scratch to Scikit-Learn',
              'Decision Trees, Random Forests & Ensemble Boosting',
              'Model evaluation: Confusion Matrix, Precision, Recall, F1-Score & ROC-AUC',
              'Hyperparameter tuning using GridSearchCV'
            ],
            handsOnLab: 'Benchmarking 4 classification models and selecting the optimal predictor.',
            deliverable: 'Evaluated model artifact saved as serialized `.joblib` file.'
          },
          {
            dayNumber: 3,
            title: 'Neural Networks & API Deployment',
            focus: 'PyTorch Basics & FastAPI Model Serving',
            topics: [
              'Perceptron to Multi-Layer Perceptrons (MLP) architecture',
              'Activation functions (ReLU, Sigmoid), loss functions, and backpropagation',
              'Building a simple neural net in PyTorch',
              'Wrapping the trained model into a FastAPI microservice'
            ],
            handsOnLab: 'Building a FastAPI application that consumes inputs and returns real-time predictions.',
            deliverable: 'Working web API tested via Swagger UI and deployed locally.'
          }
        ]
      },
      '5days': {
        durationLabel: '5-Day Comprehensive Bootcamp',
        hours: '30 Hours (6 hrs / day)',
        recommendedFor: 'Academic departments wanting comprehensive practical skills and a production-grade portfolio project.',
        description: 'Complete pipeline from raw data and advanced algorithms to deep learning computer vision and Dockerized deployment.',
        capstoneTitle: 'End-to-End Medical Image Diagnostic Classifier',
        capstoneDescription: 'Deep CNN model that classifies chest X-rays with Grad-CAM visual explanations packaged in Docker.',
        days: [
          {
            dayNumber: 1,
            title: 'Advanced Data Engineering & Statistical ML',
            focus: 'Mathematical foundations, probability, and advanced feature pipelines.',
            topics: [
              'Mathematical foundations: Gradient Descent, Matrix operations, Loss landscapes',
              'Pipelines & ColumnTransformers in Scikit-Learn',
              'Imbalanced dataset remediation using SMOTE and threshold tuning',
              'Feature selection strategies (PCA, Recursive Feature Elimination)'
            ],
            handsOnLab: 'Building automated data cleaning & preprocessing pipelines.',
            deliverable: 'Reproducible Scikit-Learn preprocessing pipeline.'
          },
          {
            dayNumber: 2,
            title: 'Ensemble Learning & Gradient Boosting',
            focus: 'XGBoost, LightGBM, and production model tuning.',
            topics: [
              'Bagging vs. Boosting architectures',
              'Mastering XGBoost and LightGBM for tabular dominance',
              'Model explainability using SHAP and LIME values',
              'Cross-validation techniques for time-series and stratified data'
            ],
            handsOnLab: 'Optimizing an XGBoost model on a fraud detection challenge.',
            deliverable: 'High-accuracy model with explainability dashboards.'
          },
          {
            dayNumber: 3,
            title: 'Deep Learning & Neural Architectures',
            focus: 'PyTorch deep dive, tensors, autograd, and training loops.',
            topics: [
              'Deep Neural Networks with PyTorch: Tensors, Datasets, Dataloaders',
              'Custom training loops, optimization algorithms (Adam, AdamW, SGD)',
              'Regularization techniques: Dropout, Batch Normalization, Weight Decay',
              'TensorBoard / Weights & Biases logging integration'
            ],
            handsOnLab: 'Coding a multi-layer deep network from scratch with PyTorch.',
            deliverable: 'Training loss curves and convergence analytics.'
          },
          {
            dayNumber: 4,
            title: 'Computer Vision & Transfer Learning',
            focus: 'CNNs, ResNet, and image classification workflows.',
            topics: [
              'Convolutional layers, pooling, stride, and receptive fields',
              'Transfer learning with pretrained models (ResNet, EfficientNet)',
              'Data augmentation pipelines with torchvision',
              'Model checkpoints and early stopping callbacks'
            ],
            handsOnLab: 'Fine-tuning a ResNet model for multi-class image classification.',
            deliverable: 'Trained computer vision model with >92% test accuracy.'
          },
          {
            dayNumber: 5,
            title: 'Production Deployment & MLOps Basics',
            focus: 'FastAPI, Docker containerization & cloud serving.',
            topics: [
              'Model serialization with ONNX and TorchScript',
              'Building high-performance async prediction endpoints with FastAPI',
              'Dockerizing the ML inference engine',
              'Capstone project presentations and certificate distribution'
            ],
            handsOnLab: 'Containerizing and serving the vision classifier in Docker.',
            deliverable: 'Live containerized API endpoint with interactive demo frontend.'
          }
        ]
      },
      '6days': {
        durationLabel: '6-Day Advanced Masterclass & FDP',
        hours: '36 Hours (6 hrs / day)',
        recommendedFor: 'Faculty Development Programs (FDP), honors students, and institutional Centers of Excellence.',
        description: 'Industrial-grade deep dive covering advanced neural architectures, model monitoring, ML pipelines, and enterprise case studies.',
        capstoneTitle: 'Enterprise Predictive Maintenance & Anomaly Detection Suite',
        capstoneDescription: 'Full-stack IoT sensor telemetry anomaly detection engine with real-time alerting and automated model retraining.',
        days: [
          {
            dayNumber: 1,
            title: 'Foundations & Mathematical Vector Spaces for AI',
            focus: 'Vector Calculus, Linear Algebra, and Data Preprocessing at Scale.',
            topics: [
              'Vector spaces, eigenvalues, and SVD in modern AI',
              'High-dimensional data representation and curse of dimensionality',
              'End-to-end data pipeline design and validation',
              'Industrial case study: Sensor data cleaning and stream processing'
            ],
            handsOnLab: 'Scalable data processing notebook with distributed pandas alternatives.',
            deliverable: 'Production dataset baseline with data drift checks.'
          },
          {
            dayNumber: 2,
            title: 'Statistical Learning & State-of-the-Art Tabular Models',
            focus: 'Advanced ensemble methodologies and interpretable machine learning.',
            topics: [
              'Advanced boosting: CatBoost, LightGBM, and Stacking Classifiers',
              'Bayesian hyperparameter optimization using Optuna',
              'Fairness, bias audit, and ethical AI metrics',
              'Benchmarking inference latency vs. accuracy tradeoffs'
            ],
            handsOnLab: 'Running automated Optuna studies with 100+ trials.',
            deliverable: 'Optimized model checkpoint with benchmark metrics.'
          },
          {
            dayNumber: 3,
            title: 'Deep Learning Architectures & PyTorch Mastery',
            focus: 'Custom layers, loss functions, and GPU acceleration.',
            topics: [
              'Custom PyTorch Modules, Loss functions, and metrics',
              'Mixed precision training (FP16/BF16) and GPU utilization',
              'Recurrent architectures vs. 1D Convolutions for sequential telemetry',
              'Autoencoders for unsupervised anomaly detection'
            ],
            handsOnLab: 'Constructing an Autoencoder to spot anomalies in sensor streams.',
            deliverable: 'Trained unsupervised anomaly detector with threshold alarms.'
          },
          {
            dayNumber: 4,
            title: 'Computer Vision & Multimodal Foundations',
            focus: 'Advanced CNNs, Vision Transformers (ViT) & Object Detection basics.',
            topics: [
              'Modern Vision architectures: ConvNeXt & Vision Transformers',
              'Object detection concepts: YOLO architecture walkthrough',
              'Explainable AI for Vision: Grad-CAM and saliency maps',
              'Model quantization and pruning techniques'
            ],
            handsOnLab: 'Real-time webcam inference using an optimized vision model.',
            deliverable: 'Visual inference demonstration with bounding boxes & heatmaps.'
          },
          {
            dayNumber: 5,
            title: 'MLOps, CI/CD for Models & Continuous Retraining',
            focus: 'Model registries, automated testing, and container orchestration.',
            topics: [
              'MLflow experiment tracking and model registry workflows',
              'Data drift and concept drift detection with Evidently AI',
              'Automated model retraining triggers and CI/CD testing',
              'Building resilient microservices for high-concurrency inference'
            ],
            handsOnLab: 'Setting up an MLflow tracking server and logging runs.',
            deliverable: 'MLflow dashboard tracking parameters, artifacts, and metrics.'
          },
          {
            dayNumber: 6,
            title: 'Full Capstone Defense, Cloud Deployment & Certification',
            focus: 'Deploying to cloud, system review, and career roadmaps.',
            topics: [
              'Deploying containerized ML services to AWS / Cloud VM',
              'Creating a Streamlit / React interactive dashboard for stakeholders',
              'Student / Faculty capstone project presentations and peer review',
              'Industry career paths, research paper reading strategies & certification'
            ],
            handsOnLab: 'Live deployment of the complete Predictive Maintenance Suite.',
            deliverable: 'Live web URL + GitHub repository with complete documentation.'
          }
        ]
      }
    }
  },
  {
    id: 'genai',
    title: 'Generative AI & Large Language Models',
    shortTitle: 'GenAI & LLMs',
    tagline: 'Build RAG pipelines, fine-tune open weights, master prompt engineering, and deploy multimodal AI apps.',
    category: 'Artificial Intelligence',
    badge: 'Highest Demand',
    level: 'Intermediate to Advanced',
    rating: 4.98,
    reviewsCount: 5120,
    studentsTrained: '45,000+',
    partnerColleges: '240+',
    heroGradient: 'from-yellow-500 via-orange-500 to-amber-600',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=compress&cs=tinysrgb&w=800',
    overview: 'Generative AI is revolutionizing every industry. This hands-on track covers everything from the transformer architecture and advanced prompt engineering to Retrieval-Augmented Generation (RAG) with vector databases, embeddings, and fine-tuning open-source LLMs using LoRA/QLoRA.',
    prerequisites: ['Python proficiency', 'Basic understanding of APIs & web requests'],
    toolsAndTech: ['OpenAI API', 'Anthropic Claude', 'Ollama', 'LangChain', 'LlamaIndex', 'ChromaDB', 'Pinecone', 'Hugging Face', 'Streamlit'],
    careerRoles: ['Generative AI Engineer', 'LLM Application Developer', 'Prompt Engineer', 'AI Solutions Architect'],
    learningOutcomes: [
      'Master prompt design patterns (Few-shot, Chain-of-Thought, ReAct, System Prompting).',
      'Build production-ready RAG architectures with Chunking, Embeddings, and Hybrid Search.',
      'Run open-source models (Llama 3, Mistral, Gemma) locally using Ollama.',
      'Fine-tune open-source models with LoRA/QLoRA using Hugging Face PEFT.'
    ],
    syllabi: {
      '3days': {
        durationLabel: '3-Day Fast-Track Workshop',
        hours: '18 Hours (6 hrs / day)',
        recommendedFor: 'Colleges and hackathons wanting students to build working LLM apps and RAG bots immediately.',
        description: 'Fast-paced immersion into LLM APIs, prompt engineering, vector databases, and interactive RAG development.',
        capstoneTitle: 'Intelligent College Policy & Syllabus Chatbot (RAG)',
        capstoneDescription: 'An interactive chatbot that ingests academic PDFs and provides accurate, cited answers with zero hallucination.',
        days: [
          {
            dayNumber: 1,
            title: 'LLM Foundations & Prompt Engineering Mastery',
            focus: 'Transformer overview, tokens, temperatures, and structured prompt design.',
            topics: [
              'Evolution of GPT and Transformer Attention mechanism simplified',
              'API integration with OpenAI & local open-source models via Ollama',
              'Advanced Prompt Engineering: Few-Shot, Chain-of-Thought, Directional Stimulus',
              'Structured JSON outputs and function calling protocols'
            ],
            handsOnLab: 'Building an automated content generator with structured JSON output.',
            deliverable: 'Command-line tool generating structured assessment questions from text.'
          },
          {
            dayNumber: 2,
            title: 'Vector Embeddings & Building RAG from Scratch',
            focus: 'Semantic search, chunking strategies, and vector databases.',
            topics: [
              'How embeddings work: high-dimensional semantic spaces',
              'Document loaders (PDF, Markdown, HTML) and recursive character chunking',
              'Vector databases: ChromaDB and FAISS hands-on setup',
              'Connecting the retrieval pipeline to an LLM with LangChain'
            ],
            handsOnLab: 'Indexing a 50-page technical PDF into ChromaDB and running similarity queries.',
            deliverable: 'Semantic search engine returning relevant document passages with scores.'
          },
          {
            dayNumber: 3,
            title: 'Full-Stack RAG Application with Streamlit & Deployment',
            focus: 'Conversational memory, source citation & web UI deployment.',
            topics: [
              'Implementing conversational buffer memory and chat histories',
              'Mitigating hallucination: Grounding, guardrails, and citation prompts',
              'Building a sleek dark-mode web interface with Streamlit',
              'Deploying the GenAI application to Hugging Face Spaces / Streamlit Cloud'
            ],
            handsOnLab: 'Assembling the full interactive RAG chatbot with source citations.',
            deliverable: 'Publicly shareable live web link to the College RAG Chatbot.'
          }
        ]
      },
      '5days': {
        durationLabel: '5-Day Comprehensive Bootcamp',
        hours: '30 Hours (6 hrs / day)',
        recommendedFor: 'Comprehensive college bootcamps preparing students for GenAI engineering job roles.',
        description: 'From RAG and multi-modal models to advanced evaluation (RAGAS), guardrails, and lightweight fine-tuning.',
        capstoneTitle: 'Enterprise Multimodal Knowledge Assistant & Code Reviewer',
        capstoneDescription: 'RAG system capable of analyzing technical documents, architecture diagrams, and Python codebases with RAGAS evaluation.',
        days: [
          {
            dayNumber: 1,
            title: 'Deep Dive: Transformers, Tokens & API Architecture',
            focus: 'Self-attention, tokenizers, latency, cost optimization, and streaming.',
            topics: [
              'Under the hood: Multi-head self-attention and autoregressive generation',
              'Token economics, context window management, and rate-limiting strategies',
              'Streaming responses with WebSockets / SSE in FastAPI',
              'Ollama & Local LLM setup (Llama 3, Mistral 7B) on student laptops'
            ],
            handsOnLab: 'Building a local terminal streaming assistant using Ollama and Python.',
            deliverable: 'Offline-capable local LLM client running on local CPU/GPU.'
          },
          {
            dayNumber: 2,
            title: 'Advanced RAG Architecture & Vector Search',
            focus: 'Hierarchical chunking, hybrid search, re-ranking, and metadata filtering.',
            topics: [
              'Semantic vs. Keyword (BM25) search & Hybrid Retrieval',
              'Parent Document Retriever & Contextual Compression in LangChain',
              'Cross-Encoder Re-Ranking using Cohere / Hugging Face models',
              'Persistent vector storage with Pinecone / ChromaDB'
            ],
            handsOnLab: 'Benchmarking standard RAG vs. Hybrid Re-ranked RAG on noisy datasets.',
            deliverable: 'Quantitative retrieval improvement report showing top-3 accuracy gain.'
          },
          {
            dayNumber: 3,
            title: 'Agents, Tools & Function Calling with LangGraph',
            focus: 'Autonomous tool usage, web search integration, and computational calculators.',
            topics: [
              'What makes an Agent: Thought -> Action -> Observation cycle (ReAct)',
              'OpenAI Function Calling & Tool definition schemas',
              'Connecting LLMs to live DuckDuckGo web search and Python REPL execution',
              'Stateful workflows using LangGraph basics'
            ],
            handsOnLab: 'Building a research agent that queries live stock prices and compiles summaries.',
            deliverable: 'Autonomous agent script completing multi-step research autonomously.'
          },
          {
            dayNumber: 4,
            title: 'Multimodal AI & Vision Language Models (VLMs)',
            focus: 'Image comprehension, chart parsing, and document OCR with GPT-4o / Claude.',
            topics: [
              'Vision Language Models: How LLMs process images, diagrams, and UI mockups',
              'Visual RAG: Indexing diagrams and infographics alongside text',
              'Audio transcription with Whisper and voice agent pipelines',
              'Prompt injection defense, safety guardrails (NeMo Guardrails)'
            ],
            handsOnLab: 'Building an app that ingests whiteboard architecture photos and writes backend code.',
            deliverable: 'Visual architecture-to-code prototype with live image uploads.'
          },
          {
            dayNumber: 5,
            title: 'Fine-Tuning Open LLMs (LoRA/QLoRA) & Capstone Demo',
            focus: 'Dataset preparation, parameter-efficient fine-tuning (PEFT), and capstone defense.',
            topics: [
              'When to Prompt vs. RAG vs. Fine-tune: The decision matrix',
              'LoRA (Low-Rank Adaptation) and QLoRA 4-bit quantization theory',
              'Preparing synthetic instruction datasets in JSONL format',
              'Fine-tuning a lightweight model on Google Colab T4 GPU with Unsloth / Hugging Face',
              'Capstone project presentations and certificate ceremony'
            ],
            handsOnLab: 'Fine-tuning a small model to follow a custom domain tone and syntax.',
            deliverable: 'Custom LoRA adapter weights exported to Hugging Face Hub.'
          }
        ]
      },
      '6days': {
        durationLabel: '6-Day Advanced Masterclass & FDP',
        hours: '36 Hours (6 hrs / day)',
        recommendedFor: 'Faculty Development Programs (FDP) & senior engineering students creating production GenAI systems.',
        description: 'End-to-end industrial masterclass covering high-throughput serving (vLLM), automated synthetic data generation, and full deployment.',
        capstoneTitle: 'Autonomous Enterprise Customer Support & Technical Copilot',
        capstoneDescription: 'Multi-tenant RAG platform with guardrails, automated ticket routing, human-in-the-loop escalation, and telemetry.',
        days: [
          {
            dayNumber: 1,
            title: 'Foundational Theory of Modern Generative Architectures',
            focus: 'Transformer math, KV-Cache, quantization algorithms, and model benchmarks.',
            topics: [
              'Deep dive: Positional encodings (RoPE), FlashAttention, and KV-cache dynamics',
              'Open-weights landscape: Llama 3, Mistral, Qwen, DeepSeek, and Gemma',
              'Quantization science: GGUF, AWQ, GPTQ, and memory footprints',
              'Local high-performance inference using Ollama and llama.cpp'
            ],
            handsOnLab: 'Benchmarking inference speed (tokens/sec) across quantization levels.',
            deliverable: 'Comprehensive hardware benchmark matrix on local machines.'
          },
          {
            dayNumber: 2,
            title: 'Enterprise RAG Pipeline Engineering',
            focus: 'Advanced chunking, multi-representation indexing, and dense retrieval.',
            topics: [
              'Semantic chunking vs. Markdown/Structure-aware parsing',
              'ColBERT (Contextualized Late Interaction) and Dense Retrieval',
              'Multi-vector indexing and Hypothetical Document Embeddings (HyDE)',
              'Handling tables, financial filings, and complex layouts'
            ],
            handsOnLab: 'Building a HyDE retrieval pipeline for complex regulatory documents.',
            deliverable: 'Retrieval accuracy benchmark surpassing 95% on tricky queries.'
          },
          {
            dayNumber: 3,
            title: 'Evaluation Frameworks & Mitigating Hallucinations',
            focus: 'RAGAS, TruLens, Guardrails, and LLM-as-a-Judge.',
            topics: [
              'Quantitative evaluation with RAGAS: Faithfulness, Answer Relevance, Context Recall',
              'Building automated synthetic test sets with LangSmith / RAGAS',
              'Input/Output validation with Pydantic and NeMo Guardrails',
              'Detecting and preventing prompt injection and jailbreaking'
            ],
            handsOnLab: 'Automated evaluation suite running regression tests on RAG answers.',
            deliverable: 'Automated CI test report validating answer faithfulness scores.'
          },
          {
            dayNumber: 4,
            title: 'Agentic Workflows & Multi-Step Reasoning',
            focus: 'Plan-and-Solve, LangGraph state machines, and API orchestration.',
            topics: [
              'From simple chains to stateful cyclic agent graphs with LangGraph',
              'Implementing human-in-the-loop approval workflows',
              'Integrating SQL database connectors and executing safe read-only queries',
              'Error recovery and self-correcting code generation agents'
            ],
            handsOnLab: 'Building a self-healing Python code generator that executes and fixes syntax bugs.',
            deliverable: 'Autonomous agent that runs code in sandbox and self-corrects errors.'
          },
          {
            dayNumber: 5,
            title: 'Fine-Tuning, Direct Preference Optimization (DPO) & Datasets',
            focus: 'Creating dataset pipelines, instruction tuning, and alignment.',
            topics: [
              'Synthetic data generation using frontier models for training data',
              'Instruction fine-tuning with Hugging Face TRL (Transformer Reinforcement Learning)',
              'DPO (Direct Preference Optimization) concept and alignment principles',
              'Merging LoRA adapters with base models and exporting GGUF models'
            ],
            handsOnLab: 'Running a complete QLoRA fine-tuning session on Google Colab.',
            deliverable: 'Custom fine-tuned GGUF model deployed into Ollama for testing.'
          },
          {
            dayNumber: 6,
            title: 'High-Throughput Production Serving & Capstone Showcase',
            focus: 'vLLM, Docker, Cloud microservices, and live capstone defense.',
            topics: [
              'High-throughput model serving with vLLM and PagedAttention',
              'Packaging full-stack GenAI application (React + FastAPI + VectorDB) in Docker Compose',
              'Monitoring latency, token costs, and user feedback loops',
              'Capstone project exhibitions, jury review, and certification awards'
            ],
            handsOnLab: 'Deploying the complete multi-tier enterprise copilot architecture.',
            deliverable: 'Production repository with Docker Compose and live demo URL.'
          }
        ]
      }
    }
  },
  {
    id: 'agentic-ai',
    title: 'Agentic AI & Autonomous Multi-Agent Systems',
    shortTitle: 'Agentic AI',
    tagline: 'Orchestrate autonomous agent teams, self-correcting loops, LangGraph, CrewAI & AutoGen architectures.',
    category: 'Applied Deeptech',
    badge: 'Next-Gen Frontier',
    level: 'Advanced',
    rating: 4.97,
    reviewsCount: 2940,
    studentsTrained: '22,000+',
    partnerColleges: '140+',
    heroGradient: 'from-orange-600 via-amber-500 to-yellow-400',
    iconName: 'Bot',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=compress&cs=tinysrgb&w=800',
    overview: 'Move beyond simple chatbots to proactive, autonomous AI agents. Learn to design multi-agent swarms where specialized agents collaborate, delegate tasks, execute external tools, self-correct mistakes, and operate software autonomously using LangGraph, CrewAI, and AutoGen.',
    prerequisites: ['Python intermediate knowledge', 'Familiarity with LLM APIs & basic async programming'],
    toolsAndTech: ['CrewAI', 'LangGraph', 'Microsoft AutoGen', 'Ollama', 'Tavily Search', 'BrowserBase / Playwright', 'Docker'],
    careerRoles: ['Agentic AI Engineer', 'Autonomous Systems Developer', 'AI Automation Consultant', 'Workflow Orchestrator'],
    learningOutcomes: [
      'Architect role-based multi-agent teams with CrewAI (Manager, Researcher, Writer, Reviewer).',
      'Build cyclical, stateful agent graphs with LangGraph and human-in-the-loop controls.',
      'Equip agents with tool-calling capabilities (web search, browser automation, code execution).',
      'Design self-correcting cognitive loops that detect errors and iterate to convergence.'
    ],
    syllabi: {
      '3days': {
        durationLabel: '3-Day Fast-Track Workshop',
        hours: '18 Hours (6 hrs / day)',
        recommendedFor: 'Fast-paced weekend workshop on collaborative AI agents and automated workflows.',
        description: 'Hands-on introduction to agentic design patterns, CrewAI team orchestration, and tool integration.',
        capstoneTitle: 'Autonomous Market Research & Report Generating Agent Swarm',
        capstoneDescription: 'A multi-agent team consisting of a Trend Scout, Data Analyst, and Executive Editor that produces comprehensive market intelligence reports.',
        days: [
          {
            dayNumber: 1,
            title: 'Agent Foundations & Single Agent Architectures',
            focus: 'ReAct pattern, memory structures, and custom Python tools.',
            topics: [
              'Chatbots vs. Agents: The autonomy spectrum and cognitive architectures',
              'The ReAct framework (Reasoning + Acting) walkthrough',
              'Creating custom Python functions as callable agent tools',
              'Giving agents internet access via search APIs (Tavily / DuckDuckGo)'
            ],
            handsOnLab: 'Building a single-agent financial analyst with live search tools.',
            deliverable: 'Autonomous agent answering complex multi-part queries.'
          },
          {
            dayNumber: 2,
            title: 'Multi-Agent Collaboration with CrewAI',
            focus: 'Roles, backstories, delegation, and sequential task pipelines.',
            topics: [
              'CrewAI architecture: Agents, Tasks, Tools, and Crews',
              'Defining agent personas: Role, Goal, Backstory, and Verbose logging',
              'Task dependencies, context passing, and memory between agents',
              'Hierarchical process vs. Sequential process in agent crews'
            ],
            handsOnLab: 'Creating a 3-agent software documentation crew (Code Parser, Tech Writer, Quality Inspector).',
            deliverable: 'Multi-agent crew that reads raw GitHub files and writes complete README documentation.'
          },
          {
            dayNumber: 3,
            title: 'Agent Output Validation, Memory & Streamlit Dashboard',
            focus: 'Structured outputs, short/long-term memory, and interactive UI.',
            topics: [
              'Enforcing Pydantic schemas on final agent outputs',
              'Short-term and long-term memory configuration in multi-agent crews',
              'Integrating a Streamlit dashboard with real-time agent thought streams',
              'Deploying the agentic workflow and best practices'
            ],
            handsOnLab: 'Connecting the Market Research Crew to a real-time Streamlit dashboard.',
            deliverable: 'Live interactive UI visualizing agent dialogues and final downloadable PDF report.'
          }
        ]
      },
      '5days': {
        durationLabel: '5-Day Comprehensive Bootcamp',
        hours: '30 Hours (6 hrs / day)',
        recommendedFor: 'Colleges preparing students for cutting-edge autonomous AI startup & research roles.',
        description: 'Deep dive into LangGraph stateful machines, AutoGen multi-agent dialogues, browser automation, and sandboxed code execution.',
        capstoneTitle: 'Autonomous Full-Stack Bug Triager & Code Patcher Agent',
        capstoneDescription: 'An agent swarm that clones GitHub issues, reproduces bugs in a sandbox, writes code patches, runs unit tests, and opens pull requests.',
        days: [
          {
            dayNumber: 1,
            title: 'Cognitive Architecture & Tool Calling Protocols',
            focus: 'Agent architectures, planning modules, reflection, and JSON schema tools.',
            topics: [
              'Agent cognitive loops: Planning, Task Decomposition, Reflection, and Execution',
              'Advanced tool calling: Rate-limiting, authentication, and error handling',
              'Building custom file system tools and database connectors',
              'Controlling token explosion and infinite agent loops with step limits'
            ],
            handsOnLab: 'Building an agent that inspects local directories and renames/organizes files.',
            deliverable: 'Autonomous file organizer agent with comprehensive safety confirmations.'
          },
          {
            dayNumber: 2,
            title: 'CrewAI Advanced Patterns & Custom Toolkits',
            focus: 'Hierarchical manager agents, async tasks, and custom tool creation.',
            topics: [
              'Hierarchical agent management with a designated LLM Project Manager',
              'Async task execution and parallel tool execution',
              'Building custom scrapers with Playwright for agent web interaction',
              'Evaluation of agent task completion accuracy'
            ],
            handsOnLab: 'Building a competitive intelligence crew that scrapes competitor websites.',
            deliverable: 'Automated competitor comparison matrix with verified citations.'
          },
          {
            dayNumber: 3,
            title: 'LangGraph: Cyclic Graphs & Stateful Agent Machines',
            focus: 'Graph state, nodes, edges, conditional routers, and persistence.',
            topics: [
              'Why DAGs fail for agents: The necessity of cyclic graphs (loops)',
              'LangGraph primitives: StateGraph, TypedDict, Nodes, and Conditional Edges',
              'Designing a self-correcting code generation loop: Draft -> Test -> Fix -> Verify',
              'Persistence: Checkpointing state in SQLite/PostgreSQL for long-running agents'
            ],
            handsOnLab: 'Building a self-correcting Python code generation graph.',
            deliverable: 'State graph that loops up to 5 times until all generated unit tests pass.'
          },
          {
            dayNumber: 4,
            title: 'Human-in-the-Loop & Multi-Agent Swarms with AutoGen',
            focus: 'Microsoft AutoGen, conversational patterns, and human approvals.',
            topics: [
              'Microsoft AutoGen concepts: ConversableAgent, UserProxyAgent, AssistantAgent',
              'GroupChat and GroupChatManager for freeform conversational dynamics',
              'Implementing Human-in-the-Loop breakpoints before dangerous actions',
              'Docker-based sandboxing for safe agent Python code execution'
            ],
            handsOnLab: 'Setting up an AutoGen group chat solving data science optimization problems in Docker.',
            deliverable: 'Isolated sandbox executing agent code securely with human approval gates.'
          },
          {
            dayNumber: 5,
            title: 'Production Agent Deployment, Telemetry & Capstone Demo',
            focus: 'LangSmith tracing, latency monitoring, cost management, and capstone presentation.',
            topics: [
              'Observability and tracing agent thought trees with LangSmith / Phoenix Arize',
              'Packaging multi-agent microservices in FastAPI with background tasks',
              'Managing API keys, secrets, and rate limit quotas in multi-agent environments',
              'Capstone project presentations, live demos, and certificate distribution'
            ],
            handsOnLab: 'Deploying the Autonomous Bug Triager to handle mock repository issues.',
            deliverable: 'Live demo of agent reading bug report, writing fix, and verifying tests.'
          }
        ]
      },
      '6days': {
        durationLabel: '6-Day Advanced Masterclass & FDP',
        hours: '36 Hours (6 hrs / day)',
        recommendedFor: 'Comprehensive institutional masterclass and research-driven Faculty Development Program.',
        description: 'Complete exploration of autonomous enterprise agent ecosystems, multi-modal vision agents, MCP (Model Context Protocol), and enterprise governance.',
        capstoneTitle: 'Enterprise Autonomous DevOps & Security Incident Responder Swarm',
        capstoneDescription: 'Production-ready swarm that monitors server metrics, investigates alert root causes, interacts with cloud consoles, and drafts post-mortems.',
        days: [
          {
            dayNumber: 1,
            title: 'Agentic Architectures & Cognitive Science Foundations',
            focus: 'Theoretical frameworks, cognitive memory, planning trees, and benchmarking.',
            topics: [
              'Cognitive architectures: SOAR, ACT-R influence on modern AI agents',
              'Tree of Thoughts (ToT) and Graph of Thoughts (GoT) planning algorithms',
              'Memory hierarchies: Episodic, Semantic, Working, and Procedural memory',
              'Benchmarking agent performance using GAIA and SWE-bench methodologies'
            ],
            handsOnLab: 'Implementing a Tree of Thoughts planning engine in pure Python.',
            deliverable: 'Custom ToT reasoning module outperforming single-prompt LLM by 28%.'
          },
          {
            dayNumber: 2,
            title: 'CrewAI Enterprise Patterns & Multi-Tier Delegation',
            focus: 'Advanced multi-crew workflows, memory persistence, and tool sandboxing.',
            topics: [
              'Crew-of-Crews: Orchestrating multiple specialized sub-crews',
              'Cross-agent memory sharing with embedding vector indexes',
              'Dynamic tool synthesis: Agents creating new tools at runtime',
              'Handling hallucinated tool parameters and schema validation'
            ],
            handsOnLab: 'Building a multi-crew system: Research Crew hands off to Writing Crew hands off to Legal Review Crew.',
            deliverable: 'Automated end-to-end publishing pipeline with zero human intervention.'
          },
          {
            dayNumber: 3,
            title: 'Mastering LangGraph for Mission-Critical Automation',
            focus: 'Stateful persistence, time-travel debugging, and multi-tenant isolation.',
            topics: [
              'Advanced LangGraph: Subgraphs, Parallel branches (fan-out / fan-in)',
              'Time-travel: Rewinding agent state to inspect decisions and branch alternate paths',
              'Multi-tenant agent sessions with isolated state stores',
              'Streaming granular node updates to modern web frontends'
            ],
            handsOnLab: 'Building a complex loan underwriting graph with parallel risk checks and branch merging.',
            deliverable: 'Production LangGraph with state rewind capabilities.'
          },
          {
            dayNumber: 4,
            title: 'Model Context Protocol (MCP) & Browser Automation',
            focus: 'Anthropic MCP standard, headless browsers, and vision-guided agents.',
            topics: [
              'Understanding Anthropic’s Model Context Protocol (MCP) for standardizing agent tools',
              'Connecting agents to MCP servers (GitHub, PostgreSQL, Slack, Filesystem)',
              'Browser-use and Playwright: Vision-guided agents clicking and navigating web pages',
              'Handling captchas, authentication cookies, and dynamic single-page applications'
            ],
            handsOnLab: 'Building a browser agent that logs into an e-commerce dashboard and extracts order metrics.',
            deliverable: 'Working browser automation agent with video recording artifacts.'
          },
          {
            dayNumber: 5,
            title: 'Agent Safety, Guardrails, Red-Teaming & Cost Controls',
            focus: 'Preventing prompt injection in agent tools, rate limits, and red-teaming.',
            topics: [
              'Indirect prompt injection through web scraping and untrusted documents',
              'Dual-LLM architecture (Privileged vs. Quarantined) for agent security',
              'Budget guards: hard token caps, timeout abort signals, and circuit breakers',
              'Observability: OpenTelemetry, LangSmith traces, and evaluation datasets'
            ],
            handsOnLab: 'Simulating red-team attacks on an agent with poisoned web pages and adding defenses.',
            deliverable: 'Hardened agent architecture resistant to indirect injection payloads.'
          },
          {
            dayNumber: 6,
            title: 'Capstone Incident Defense, Cloud Deployment & Certification',
            focus: 'Live swarm demonstration, enterprise architecture review, and awards.',
            topics: [
              'Deploying agent swarms to cloud clusters with Celery/Redis queue workers',
              'Building clean executive dashboards in Next.js/React with SSE thought streams',
              'Capstone project exhibitions and faculty/industry jury defense',
              'Emerging research horizons, open-source contribution pathways, and certificates'
            ],
            handsOnLab: 'Deploying the complete Autonomous Incident Responder Swarm to production.',
            deliverable: 'Production GitHub repository, live web demo, and architectural defense report.'
          }
        ]
      }
    }
  },
  {
    id: 'fde',
    title: 'Forward Deployed Engineering (FDE)',
    shortTitle: 'FDE',
    tagline: 'Bridge enterprise requirements, production AI deployments, data pipelines & rapid customer solution architecture.',
    category: 'Applied Deeptech',
    badge: 'Enterprise Architecture',
    level: 'Advanced',
    rating: 4.96,
    reviewsCount: 1890,
    studentsTrained: '14,000+',
    partnerColleges: '95+',
    heroGradient: 'from-orange-500 via-amber-600 to-yellow-500',
    iconName: 'Server',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=compress&cs=tinysrgb&w=800',
    overview: 'Pioneered by Palantir and top AI enterprise firms, Forward Deployed Engineers operate at the high-stakes intersection of software engineering, customer architecture, and applied AI. Learn how to interface with enterprise stakeholders, integrate legacy data silos, deploy bespoke AI pipelines on customer infrastructure, and deliver mission-critical software.',
    prerequisites: ['Good programming foundations in Python or JavaScript', 'Understanding of databases and web architecture'],
    toolsAndTech: ['Docker', 'Kubernetes', 'FastAPI', 'PostgreSQL', 'Kafka', 'Terraform', 'Next.js', 'GitHub Actions'],
    careerRoles: ['Forward Deployed Engineer (FDE)', 'Solutions Architect', 'Enterprise AI Integration Engineer', 'Technical Product Architect'],
    learningOutcomes: [
      'Deconstruct complex ambiguous enterprise business problems into robust software specifications.',
      'Build resilient data ingestion pipelines connecting legacy databases with modern AI microservices.',
      'Package and deploy secure, air-gapped or hybrid-cloud AI solutions with Docker and Kubernetes.',
      'Lead rapid prototype-to-production cycles under enterprise security & compliance constraints.'
    ],
    syllabi: {
      '3days': {
        durationLabel: '3-Day Fast-Track Workshop',
        hours: '18 Hours (6 hrs / day)',
        recommendedFor: 'Engineering colleges seeking to give students an unfair advantage in elite tech interviews.',
        description: 'Intensive overview of customer architecture, enterprise integration patterns, and packaging deployed solutions.',
        capstoneTitle: 'Enterprise Legacy ERP Data Modernization & AI Interface',
        capstoneDescription: 'A bespoke middleware service that ingests messy SQL records and exposes clean real-time semantic search and analytics.',
        days: [
          {
            dayNumber: 1,
            title: 'The FDE Playbook: Customer Discovery & Architecture Design',
            focus: 'Enterprise problem formulation, SLAs, architecture diagrams, and requirements.',
            topics: [
              'What is a Forward Deployed Engineer? Palantir / enterprise deployment models',
              'Translating non-technical client pain points into actionable technical specs',
              'System architecture mapping: C4 model diagrams and security boundary definitions',
              'Designing resilient REST APIs for legacy data wrapping'
            ],
            handsOnLab: 'Authoring an Architecture Decision Record (ADR) and mock technical proposal.',
            deliverable: 'Complete ADR document and system architecture blueprint.'
          },
          {
            dayNumber: 2,
            title: 'Enterprise Data Ingestion & Transformation Pipelines',
            focus: 'Connecting messy enterprise data to modern databases and validation layers.',
            topics: [
              'Ingesting CSV, XML, and messy SQL database dumps',
              'Data validation and type safety with Pydantic and SQLAlchemy',
              'Building idempotent ingestion workers that recover from connection failures',
              'Setting up PostgreSQL with vector indexing (pgvector)'
            ],
            handsOnLab: 'Building a data transformation pipeline that sanitizes 50,000 legacy records.',
            deliverable: 'Automated data ingestion pipeline with schema validation and error logging.'
          },
          {
            dayNumber: 3,
            title: 'Packaging, Containerization & Client Delivery',
            focus: 'Docker Compose, environment parity, and executive demo portals.',
            topics: [
              'Creating self-contained single-command deployment scripts (`docker compose up`)',
              'Configuring environment variables, secrets, and zero-trust policies',
              'Building an executive analytics dashboard for client stakeholders in React',
              'Handling customer feedback, scope management, and handover documentation'
            ],
            handsOnLab: 'Deploying the complete modernized middleware with Docker Compose.',
            deliverable: 'Live containerized solution running locally with automated seed data.'
          }
        ]
      },
      '5days': {
        durationLabel: '5-Day Comprehensive Bootcamp',
        hours: '30 Hours (6 hrs / day)',
        recommendedFor: 'Institutes aiming to bridge the gap between theoretical software engineering and enterprise deployments.',
        description: 'Comprehensive FDE curriculum covering real-time stream ingestion, security & compliance, air-gapped deployment, and client demo defense.',
        capstoneTitle: 'Hospital Operational Analytics & Patient Flow Optimization Platform',
        capstoneDescription: 'Full-stack deployed platform that ingests real-time patient telemetry, flags bed bottlenecks using predictive AI, and displays live ward maps.',
        days: [
          {
            dayNumber: 1,
            title: 'Enterprise Architecture & Stakeholder Engagement',
            focus: 'Customer discovery interviews, scoping, risk matrices, and architecture contracts.',
            topics: [
              'The FDE lifecycle: Scoping, Prototyping, Hardening, and Handover',
              'Reverse-engineering customer APIs and legacy databases under tight timelines',
              'Security postures: SOC2, HIPAA, GDPR, and data residency constraints',
              'Setting up structured monorepo architecture for enterprise speed'
            ],
            handsOnLab: 'Conducting a simulated customer scoping session and drafting technical contract.',
            deliverable: 'Technical Scope of Work (SOW) document with API contracts.'
          },
          {
            dayNumber: 2,
            title: 'High-Volume Ingestion & Event-Driven Architecture',
            focus: 'Message brokers, Kafka/Redis Streams, and asynchronous task queues.',
            topics: [
              'Event-driven architectures: Producer-Consumer pattern with Redis / Kafka',
              'Handling network drops, dead letter queues, and exponential backoff retries',
              'Database design: Relational (PostgreSQL) + NoSQL (MongoDB/Redis) polyglot persistence',
              'FastAPI async workers processing high-throughput payloads'
            ],
            handsOnLab: 'Simulating an incoming event stream of 1,000 events/sec and buffering safely.',
            deliverable: 'Resilient event ingestion service that survives database downtime.'
          },
          {
            dayNumber: 3,
            title: 'Integrating Custom AI/ML Models into Customer Workflows',
            focus: 'Embedding models into existing enterprise UI without disrupting operations.',
            topics: [
              'Bridging data pipelines with custom AI scoring microservices',
              'In-memory caching with Redis to achieve <50ms response times',
              'Audit logs: Tracking who made what prediction and why (governance)',
              'Feature flags and canary rollouts using Unleash / LaunchDarkly concepts'
            ],
            handsOnLab: 'Building an AI inference middleware with Redis caching and audit log trails.',
            deliverable: 'High-performance scoring API with sub-30ms cached response times.'
          },
          {
            dayNumber: 4,
            title: 'Enterprise Frontend & Executive Cockpit',
            focus: 'Next.js, Tailwind CSS, real-time WebSockets, and role-based access control.',
            topics: [
              'Designing high-density enterprise data grids and visual analytics',
              'Real-time WebSocket event pushes to React frontend',
              'Role-Based Access Control (RBAC): Admin, Operator, Auditor views',
              'Exporting compliant executive PDF / Excel reports on demand'
            ],
            handsOnLab: 'Building an interactive Next.js dashboard with live WebSocket telemetry.',
            deliverable: 'Polished client-facing dashboard with role-based navigation.'
          },
          {
            dayNumber: 5,
            title: 'Client Deployment, Cloud Infrastructure & Final Defense',
            focus: 'CI/CD, Kubernetes basics, Docker, client presentation, and signoff.',
            topics: [
              'Containerizing all tiers (Frontend, Backend, DB, Queue, Worker)',
              'Writing production-ready Dockerfiles with multi-stage builds (<100MB)',
              'Simulating air-gapped on-premise installation scripts',
              'FDE Capstone presentations: Pitching the solution to enterprise jury'
            ],
            handsOnLab: 'Deploying the complete multi-container system with one-line shell script.',
            deliverable: 'Turnkey enterprise deployment package with comprehensive documentation.'
          }
        ]
      },
      '6days': {
        durationLabel: '6-Day Advanced Masterclass & FDP',
        hours: '36 Hours (6 hrs / day)',
        recommendedFor: 'Advanced engineering cohorts and faculty members preparing for enterprise technology partnerships.',
        description: 'Exhaustive industry immersion into modern FDE practices, Terraform IaC, Kubernetes deployments, SOC2 compliance simulation, and multi-cloud architectures.',
        capstoneTitle: 'Global Supply Chain Disruption Predictor & Procurement Copilot',
        capstoneDescription: 'Air-gapped enterprise software deployed on simulated multi-region Kubernetes, integrating supplier ERP feeds and predicting shipping delays.',
        days: [
          {
            dayNumber: 1,
            title: 'Enterprise Systems Engineering & Problem Deconstruction',
            focus: 'Enterprise landscape, monolithic vs. microservice migrations, and requirements.',
            topics: [
              'The mindset of high-performing FDEs at Palantir, Databricks, and Scale AI',
              'Deconstructing 200-page enterprise RFPs into sprint milestones',
              'Enterprise network topologies: VPCs, subnets, NAT gateways, and reverse proxies',
              'Setting up enterprise development environments with devcontainers'
            ],
            handsOnLab: 'Architecture design challenge: Diagramming a secure multi-tenant SaaS integration.',
            deliverable: 'C4 architecture diagrams and security compliance checklist.'
          },
          {
            dayNumber: 2,
            title: 'Data Ingestion, Schema Evolution & Change Data Capture (CDC)',
            focus: 'Debezium, PostgreSQL logical replication, and fault-tolerant pipelines.',
            topics: [
              'Change Data Capture (CDC) principles for real-time legacy sync',
              'Handling schema migrations on live databases with zero downtime (Flyway/Alembic)',
              'High-throughput serialization formats: Protobuf vs. Avro vs. JSON',
              'Data cleaning and anomaly detection at the network edge'
            ],
            handsOnLab: 'Setting up a CDC pipeline streaming database updates into a downstream consumer.',
            deliverable: 'Zero-latency live replication stream with schema evolution support.'
          },
          {
            dayNumber: 3,
            title: 'Enterprise AI & Search Engine Engineering',
            focus: 'Hybrid search, enterprise security ACLs on vector search, and latency optimization.',
            topics: [
              'Document-level access control in enterprise search (Security ACL filtering)',
              'Deploying on-premise embedding models with CPU acceleration (ONNX Runtime)',
              'Batch inference scheduling vs. Real-time low-latency serving',
              'Designing human-in-the-loop review queues for questionable AI outputs'
            ],
            handsOnLab: 'Building an enterprise search engine that respects user role security permissions.',
            deliverable: 'Secure search service filtering out documents the current user cannot access.'
          },
          {
            dayNumber: 4,
            title: 'Enterprise Frontend Architecture & Executive Dashboards',
            focus: 'Modern frontend engineering, state machines, offline-first, and audits.',
            topics: [
              'Next.js 14 App Router with Server Components for enterprise speed',
              'State machines with XState for complex multi-step enterprise workflows',
              'Implementing single sign-on (SSO) with OAuth2 / SAML / OIDC concepts',
              'Telemetry and user session replay for rapid debugging of customer bugs'
            ],
            handsOnLab: 'Building an approval workflow dashboard with state machine constraints.',
            deliverable: 'Rigid workflow UI that prevents illegal transitions and logs all audit clicks.'
          },
          {
            dayNumber: 5,
            title: 'Infrastructure as Code (IaC) & Kubernetes Orchestration',
            focus: 'Terraform, Helm charts, Kubernetes deployments, and resilience tests.',
            topics: [
              'Writing Terraform scripts for automated cloud resource provisioning',
              'Container orchestration with Kubernetes: Pods, Deployments, Services, Ingress',
              'Packaging applications with Helm charts for simple client deployment',
              'Chaos engineering: Intentionally killing containers and testing self-healing'
            ],
            handsOnLab: 'Deploying the full application stack to a local Minikube / K3s Kubernetes cluster.',
            deliverable: 'Functional Helm chart deploying the entire 5-tier architecture smoothly.'
          },
          {
            dayNumber: 6,
            title: 'Client Acceptance Testing, Security Audit & Capstone Defense',
            focus: 'Penetration testing simulation, SOC2 audit defense, and final client presentation.',
            topics: [
              'Running security scans (Trivy, SonarQube, Snyk) on containers and code',
              'Authoring the Client Handover Manual & Runbook for internal IT teams',
              'Final capstone presentations before industry client panel',
              'Career transition roadmap to Forward Deployed Engineering roles and certification'
            ],
            handsOnLab: 'Executing a complete automated disaster recovery drill on live cluster.',
            deliverable: 'Production repository, Helm chart, Disaster Recovery runbook, and demo link.'
          }
        ]
      }
    }
  },
  {
    id: 'mern-stack',
    title: 'MERN Stack Engineering',
    shortTitle: 'MERN Stack',
    tagline: 'Build scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
    category: 'Full Stack Engineering',
    badge: 'Industry Essential',
    level: 'Beginner to Advanced',
    rating: 4.93,
    reviewsCount: 4420,
    studentsTrained: '40,000+',
    partnerColleges: '210+',
    heroGradient: 'from-amber-500 to-orange-600',
    iconName: 'Code',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=compress&cs=tinysrgb&w=800',
    overview: 'The MERN stack continues to power millions of modern web applications. Master JavaScript and TypeScript from front to back: building dynamic component-driven user interfaces in React, scalable REST & GraphQL APIs in Node and Express, and flexible document data models in MongoDB.',
    prerequisites: ['Basic HTML, CSS & fundamental JavaScript knowledge'],
    toolsAndTech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux Toolkit', 'Tailwind CSS', 'JWT Auth', 'Vite', 'Postman'],
    careerRoles: ['MERN Stack Developer', 'Frontend Engineer (React)', 'Node.js Backend Developer', 'Full Stack Software Engineer'],
    learningOutcomes: [
      'Design normalized and embedded data models in MongoDB with Mongoose.',
      'Build secure RESTful APIs with Express, JWT authentication, and middleware validation.',
      'Create reactive, component-driven user interfaces with React, Hooks, and Redux Toolkit.',
      'Deploy full-stack applications to cloud platforms with CI/CD pipelines.'
    ],
    syllabi: {
      '3days': {
        durationLabel: '3-Day Fast-Track Workshop',
        hours: '18 Hours (6 hrs / day)',
        recommendedFor: 'Rapid weekend hackathons and full-stack introductory bootcamps.',
        description: 'Build a working full-stack CRUD application with authentication from start to finish.',
        capstoneTitle: 'Full-Stack Campus Project Collaboration Portal',
        capstoneDescription: 'A responsive platform where students can create accounts, list tech projects, and request to collaborate with peer developers.',
        days: [
          {
            dayNumber: 1,
            title: 'Modern React & Component Architecture',
            focus: 'React 18+, JSX, Hooks (useState, useEffect), and Tailwind styling.',
            topics: [
              'Vite + React modern project setup and folder conventions',
              'Component reusability, props drilling remediation, and state management',
              'Handling forms, controlled inputs, and client-side validation',
              'Styling fast with Tailwind CSS utility classes'
            ],
            handsOnLab: 'Building an interactive project cards dashboard with filtering.',
            deliverable: 'Responsive frontend UI with stateful search and category filtering.'
          },
          {
            dayNumber: 2,
            title: 'Node.js, Express & MongoDB Data Modeling',
            focus: 'REST API architecture, Mongoose schemas, and database operations.',
            topics: [
              'Node.js runtime, asynchronous event loop, and npm ecosystem',
              'Express routing, middleware, request validation, and CORS',
              'Connecting to MongoDB Atlas and building Mongoose schemas',
              'Full CRUD (Create, Read, Update, Delete) endpoints with Postman testing'
            ],
            handsOnLab: 'Creating 6 REST endpoints connecting to MongoDB Atlas.',
            deliverable: 'Complete tested backend API collection exportable via Postman.'
          },
          {
            dayNumber: 3,
            title: 'JWT Authentication & Frontend Integration',
            focus: 'Auth tokens, Axios, protected routes, and deployment.',
            topics: [
              'User authentication flow: Password hashing with bcrypt & JWT tokens',
              'Protecting backend routes with custom auth middleware',
              'Connecting React frontend to Express backend using Axios',
              'Deploying frontend to Vercel and backend to Render'
            ],
            handsOnLab: 'Connecting the login/signup frontend to backend and deploying live.',
            deliverable: 'Live hosted full-stack MERN application accessible via public URL.'
          }
        ]
      },
      '5days': {
        durationLabel: '5-Day Comprehensive Bootcamp',
        hours: '30 Hours (6 hrs / day)',
        recommendedFor: 'Comprehensive college training program preparing students for campus placements.',
        description: 'Complete full-stack mastery: Redux Toolkit, file uploads, payment gateway integration, and Docker containerization.',
        capstoneTitle: 'Production E-Commerce & Workshop Ticketing Platform',
        capstoneDescription: 'Full-featured online store with product catalog, cart state via Redux, Stripe/Razorpay payments, and admin analytics.',
        days: [
          {
            dayNumber: 1,
            title: 'Advanced React & Global State Management',
            focus: 'Custom hooks, Context API, Redux Toolkit, and performance tuning.',
            topics: [
              'Advanced hooks: useMemo, useCallback, useRef, and custom hooks',
              'Global state management with Redux Toolkit (RTK) and createSlice',
              'Async API queries with RTK Query / React Query for automatic caching',
              'Clean architecture: presentation vs. container components'
            ],
            handsOnLab: 'Building a global shopping cart state with persistence in localStorage.',
            deliverable: 'Snappy UI that instantly updates cart count and calculates taxes.'
          },
          {
            dayNumber: 2,
            title: 'Enterprise Backend Architecture with Express',
            focus: 'Controller-Service-Repository pattern, error middleware, and logging.',
            topics: [
              'Layered architectural patterns in Express for maintainability',
              'Global centralized error handling and custom API response classes',
              'Data validation with Joi / Zod schemas before database insertion',
              'Structured logging with Winston and Morgan'
            ],
            handsOnLab: 'Refactoring a monolithic route file into a modular controller-service structure.',
            deliverable: 'Clean, production-grade backend repository ready for enterprise scale.'
          },
          {
            dayNumber: 3,
            title: 'Complex MongoDB Operations & Aggregation Pipeline',
            focus: 'Indexing, relational lookups, pagination, and aggregations.',
            topics: [
              'MongoDB Aggregation framework: $match, $group, $lookup, $unwind, $project',
              'Building server-side cursor and offset-based pagination',
              'Database indexing strategies: Single field, compound, and text indexes',
              'Transaction support in MongoDB for multi-document integrity'
            ],
            handsOnLab: 'Writing an aggregation query calculating monthly sales and user cohorts.',
            deliverable: 'High-speed analytical query running across 20,000 mock orders in <15ms.'
          },
          {
            dayNumber: 4,
            title: 'Payments, File Uploads & Real-time Sockets',
            focus: 'Razorpay / Stripe integration, Cloudinary media storage, and WebSockets.',
            topics: [
              'Integrating Cloudinary / AWS S3 for secure user image uploads',
              'Payment gateway checkout flow: creating orders, verifying webhook signatures',
              'WebSockets with Socket.io for real-time live notifications',
              'Security hardening: Helmet, express-rate-limit, mongo-sanitize'
            ],
            handsOnLab: 'Implementing an image upload dropzone and mock payment checkout dialog.',
            deliverable: 'Complete payment checkout flow with instant order confirmation.'
          },
          {
            dayNumber: 5,
            title: 'Testing, Dockerization & Production Deployment',
            focus: 'Unit tests with Vitest, Docker Compose, and CI/CD pipelines.',
            topics: [
              'Writing automated unit tests for React components and Express endpoints',
              'Dockerizing frontend (Nginx multi-stage) and backend Node container',
              'GitHub Actions CI pipeline for automated linting and tests',
              'Capstone project exhibitions and placement interview preparation'
            ],
            handsOnLab: 'Running `docker compose up` to launch frontend, backend, and MongoDB.',
            deliverable: 'Containerized e-commerce application deployed with automated GitHub Actions.'
          }
        ]
      },
      '6days': {
        durationLabel: '6-Day Advanced Masterclass & FDP',
        hours: '36 Hours (6 hrs / day)',
        recommendedFor: 'Advanced full-stack specialization, Faculty Development Programs, and enterprise readiness.',
        description: 'Industrial-grade MERN architecture covering TypeScript end-to-end, Redis caching, microservice separation, and performance optimization.',
        capstoneTitle: 'Scalable Enterprise Learning Management System (LMS)',
        capstoneDescription: 'Multi-tenant educational platform with video streaming, live student chat, role-based quizzes, and Redis caching.',
        days: [
          {
            dayNumber: 1,
            title: 'TypeScript for Full-Stack Developers',
            focus: 'Strong typing from database schemas to React props.',
            topics: [
              'Why TypeScript: Eliminating runtime errors in modern web engineering',
              'Generics, Union types, Type Narrowing, and Utility types in practice',
              'Sharing type interfaces between backend Express models and frontend React apps',
              'Configuring strict tsconfig.json for frontend and backend'
            ],
            handsOnLab: 'Porting a vanilla JavaScript Express app to strict TypeScript.',
            deliverable: '100% typed backend API with autocomplete and zero `any` types.'
          },
          {
            dayNumber: 2,
            title: 'Advanced React Architecture & Performance Optimization',
            focus: 'Code splitting, virtualization, memory leak prevention, and SSR concepts.',
            topics: [
              'React 18 Concurrent features: startTransition, useDeferredValue',
              'Virtualizing massive data lists (10,000+ items) with TanStack Virtual',
              'Bundle size analysis and code-splitting with dynamic `React.lazy()`',
              'Preventing memory leaks and unnecessary component re-renders'
            ],
            handsOnLab: 'Optimizing a slow dashboard rendering 5,000 table rows down to 60fps.',
            deliverable: 'Lighthouse score improved from 58 to 98 on performance audit.'
          },
          {
            dayNumber: 3,
            title: 'Enterprise Backend Architecture & Security Compliance',
            focus: 'OAuth2, Refresh Token rotations, RBAC, and rate limiting.',
            topics: [
              'Secure token architecture: HTTP-only cookies + short-lived JWTs + Redis refresh tokens',
              'Social authentication: Google and GitHub OAuth2 integration',
              'Role-Based and Attribute-Based Access Control (RBAC/ABAC)',
              'Defense in depth: OWASP Top 10 vulnerabilities remediation in Node.js'
            ],
            handsOnLab: 'Building an enterprise authentication microservice with refresh token rotation.',
            deliverable: 'Bulletproof auth system tested against session hijacking simulations.'
          },
          {
            dayNumber: 4,
            title: 'High-Performance Caching & Asynchronous Queues',
            focus: 'Redis caching, BullMQ background jobs, and email services.',
            topics: [
              'Cache-aside pattern with Redis for ultra-low database read latency',
              'Cache invalidation strategies (TTL vs. explicit key purging)',
              'Background job queues with BullMQ and Redis for heavy computations',
              'Automated transactional emails and PDF invoice generation in background'
            ],
            handsOnLab: 'Adding Redis caching to expensive API queries, cutting response time from 350ms to 8ms.',
            deliverable: 'Redis-cached endpoint with benchmark metrics report.'
          },
          {
            dayNumber: 5,
            title: 'Real-Time Communication & Media Streaming',
            focus: 'WebSockets, WebRTC basics, video streaming, and chunking.',
            topics: [
              'Scaling WebSockets with Socket.io Redis adapter across multiple server nodes',
              'HTTP Video streaming with range headers for smooth video playback',
              'Real-time collaborative editing using Operational Transformation basics',
              'Sentry error monitoring and performance APM setup'
            ],
            handsOnLab: 'Building a video lecture player that streams 1080p video with instant seeking.',
            deliverable: 'Working video streaming route with byte-range chunking.'
          },
          {
            dayNumber: 6,
            title: 'Production Deployment, CI/CD, Monitoring & Certification',
            focus: 'Cloud deployment, Nginx reverse proxy, SSL, and final project defense.',
            topics: [
              'Configuring Nginx reverse proxy with SSL certificates (Let’s Encrypt)',
              'Zero-downtime rolling deployments on cloud virtual machines',
              'Prometheus and Grafana dashboards for server memory and CPU metrics',
              'Capstone project exhibitions, code reviews, and certification awards'
            ],
            handsOnLab: 'Deploying the complete LMS architecture to production cloud infrastructure.',
            deliverable: 'Fully deployed production web application with live demo and source code.'
          }
        ]
      }
    }
  },
  {
    id: 'python-fs',
    title: 'Python Full Stack Engineering',
    shortTitle: 'Python FS',
    tagline: 'Build robust enterprise web applications with Python, FastAPI/Django, PostgreSQL, and React.',
    category: 'Full Stack Engineering',
    badge: 'Enterprise Favorite',
    level: 'Beginner to Advanced',
    rating: 4.95,
    reviewsCount: 3680,
    studentsTrained: '35,000+',
    partnerColleges: '175+',
    heroGradient: 'from-yellow-500 via-orange-500 to-amber-500',
    iconName: 'Terminal',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=compress&cs=tinysrgb&w=800',
    overview: 'Python is the world’s most versatile programming language. In this hands-on engineering track, master building blazing-fast async backends using FastAPI and robust enterprise systems with Django, paired with modern PostgreSQL databases and interactive React/Next.js frontends.',
    prerequisites: ['Basic Python or programming foundations'],
    toolsAndTech: ['Python 3.12', 'FastAPI', 'Django', 'PostgreSQL', 'SQLAlchemy', 'React.js', 'Docker', 'Celery', 'Redis'],
    careerRoles: ['Python Full Stack Developer', 'Backend Python Engineer', 'FastAPI Specialist', 'Software Engineer'],
    learningOutcomes: [
      'Build modern asynchronous REST APIs with FastAPI, Pydantic, and automatic OpenAPI docs.',
      'Master relational database design and complex queries using PostgreSQL and SQLAlchemy.',
      'Integrate React/Next.js frontend with Python backend via type-safe API contracts.',
      'Deploy scalable Python web services using Gunicorn, Uvicorn, and Docker.'
    ],
    syllabi: {
      '3days': {
        durationLabel: '3-Day Fast-Track Workshop',
        hours: '18 Hours (6 hrs / day)',
        recommendedFor: 'Fast-track introduction to modern Python full-stack web development.',
        description: 'Build and deploy a full-stack application with FastAPI, PostgreSQL, and React.',
        capstoneTitle: 'Automated Student Assessment & Feedback System',
        capstoneDescription: 'Full-stack platform that collects coding assignments, grades outputs automatically in Python, and updates student grade books.',
        days: [
          {
            dayNumber: 1,
            title: 'Modern Python & FastAPI Fundamentals',
            focus: 'Python 3 type hinting, async/await, and FastAPI route structure.',
            topics: [
              'Python 3.12 modern features: Type hints, match-case, dataclasses',
              'Async programming: Event loop, coroutines, and why async FastAPI is fast',
              'Building REST endpoints: path parameters, query parameters, request bodies',
              'Automatic interactive API documentation with Swagger UI (/docs)'
            ],
            handsOnLab: 'Building a CRUD API for managing academic courses in FastAPI.',
            deliverable: 'Functional FastAPI service tested via interactive Swagger documentation.'
          },
          {
            dayNumber: 2,
            title: 'PostgreSQL & SQLAlchemy ORM Integration',
            focus: 'Database modeling, Alembic migrations, and relational queries.',
            topics: [
              'PostgreSQL installation, tables, primary/foreign keys, and indexes',
              'SQLAlchemy 2.0 async ORM: Declarative base, relationships, and sessions',
              'Database schema migrations with Alembic',
              'Dependency injection in FastAPI for clean database session management'
            ],
            handsOnLab: 'Connecting FastAPI to a cloud PostgreSQL instance with 3 relational tables.',
            deliverable: 'Database-backed API with automated migration scripts.'
          },
          {
            dayNumber: 3,
            title: 'React Frontend Integration & Cloud Deployment',
            focus: 'Connecting React to FastAPI and deploying with Uvicorn.',
            topics: [
              'Building responsive UI components in React for data display',
              'Handling CORS, API tokens, and asynchronous fetch calls',
              'Packaging the Python backend with Uvicorn and Gunicorn workers',
              'Deploying frontend to Vercel and backend to Render / Railway'
            ],
            handsOnLab: 'Connecting the grading portal frontend to FastAPI and deploying live.',
            deliverable: 'Live web link to the deployed Python Full Stack platform.'
          }
        ]
      },
      '5days': {
        durationLabel: '5-Day Comprehensive Bootcamp',
        hours: '30 Hours (6 hrs / day)',
        recommendedFor: 'Colleges seeking a comprehensive full-stack program with deep enterprise utility.',
        description: 'In-depth coverage of authentication, background workers (Celery), caching (Redis), and testing with Pytest.',
        capstoneTitle: 'Enterprise Resource & Inventory Management Platform',
        capstoneDescription: 'Multi-warehouse stock tracking system with real-time alerts, PDF report generation, and role-based permissions.',
        days: [
          {
            dayNumber: 1,
            title: 'Advanced FastAPI Architecture & Data Validation',
            focus: 'Pydantic v2 schemas, custom validators, and layered modular design.',
            topics: [
              'Pydantic v2 deep dive: Field validation, computed fields, serialization',
              'Modular routing with APIRouter and clean domain-driven folder layout',
              'Global exception handlers and custom HTTP error envelopes',
              'Settings management with pydantic-settings and `.env` files'
            ],
            handsOnLab: 'Building a validated multi-tier API module for inventory management.',
            deliverable: 'Clean, type-safe API module rejecting malformed requests automatically.'
          },
          {
            dayNumber: 2,
            title: 'PostgreSQL Relational Mastery & Advanced Queries',
            focus: 'Joins, aggregations, transactions, and performance indexing.',
            topics: [
              'Complex SQL queries: Inner/Outer joins, subqueries, and window functions',
              'SQLAlchemy eager loading vs. lazy loading (combating N+1 query problems)',
              'Atomic database transactions with rollback protection',
              'Full-text search in PostgreSQL using tsvector and GIN indexes'
            ],
            handsOnLab: 'Building a full-text search query across product catalogs.',
            deliverable: 'Search endpoint returning matching results with relevance ranking.'
          },
          {
            dayNumber: 3,
            title: 'Enterprise Authentication & Security Protocols',
            focus: 'OAuth2 with Password (and hashing), JWT tokens, and RBAC.',
            topics: [
              'Password hashing with Argon2 / bcrypt in Python',
              'Generating and decoding JWT access and refresh tokens',
              'Building dependency injection guards for role-based permissions (Admin, Staff, User)',
              'Rate limiting and brute force protection with slowapi'
            ],
            handsOnLab: 'Implementing secure role-gated endpoints with JWT authentication.',
            deliverable: 'Protected API verifying roles and rejecting unauthorized access.'
          },
          {
            dayNumber: 4,
            title: 'Background Tasks with Celery & Redis Caching',
            focus: 'Asynchronous workers, scheduled cron jobs, and caching.',
            topics: [
              'Why background tasks: Keeping API response times under 50ms',
              'Setting up Celery with Redis broker for asynchronous jobs',
              'Generating PDF invoices and sending transactional emails in the background',
              'Caching expensive database queries using Redis in FastAPI'
            ],
            handsOnLab: 'Offloading PDF generation to a background Celery worker queue.',
            deliverable: 'Instant API response while background worker generates and stores PDF.'
          },
          {
            dayNumber: 5,
            title: 'React/Next.js Integration, Dockerization & Capstone',
            focus: 'Building modern UI, Docker Compose, and capstone presentations.',
            topics: [
              'Building a modern React dashboard with charts and real-time data',
              'Writing automated backend tests with Pytest and HTTPX test client',
              'Multi-stage Dockerfile for Python (slimming images down to <120MB)',
              'Capstone project exhibitions, technical review, and certificates'
            ],
            handsOnLab: 'Containerizing Python backend, PostgreSQL, Redis, and React frontend.',
            deliverable: 'One-command deployment of the full enterprise platform.'
          }
        ]
      },
      '6days': {
        durationLabel: '6-Day Advanced Masterclass & FDP',
        hours: '36 Hours (6 hrs / day)',
        recommendedFor: 'Faculty Development Programs and advanced student engineering cohorts.',
        description: 'Exhaustive masterclass covering both Django REST Framework and FastAPI, microservices, GraphQL, and cloud deployment.',
        capstoneTitle: 'Scalable Fintech Payment Reconciliation & Ledger Engine',
        capstoneDescription: 'High-volume transaction ledger with double-entry bookkeeping logic, event webhooks, and real-time fraud alert dashboard.',
        days: [
          {
            dayNumber: 1,
            title: 'Python Internal Architecture & Asynchronous Mastery',
            focus: 'GIL details, asyncio event loop, generators, and memory management.',
            topics: [
              'Understanding the Python GIL (Global Interpreter Lock) and multi-threading vs. multiprocessing',
              'Deep dive into `asyncio`: Tasks, Futures, semaphores, and concurrency limits',
              'Benchmarking FastAPI vs. Django vs. Flask on request throughput',
              'Setting up Poetry / uv for lightning-fast modern package management'
            ],
            handsOnLab: 'Building a high-concurrency async web scraper fetching 500 pages in parallel.',
            deliverable: 'Concurrent async tool completing tasks 15x faster than synchronous Python.'
          },
          {
            dayNumber: 2,
            title: 'High-Performance Database Engineering with PostgreSQL',
            focus: 'Connection pooling, query plans (EXPLAIN ANALYZE), and partitioning.',
            topics: [
              'PgBouncer connection pooling for high-concurrency workloads',
              'Reading and optimizing query plans with EXPLAIN (ANALYZE, BUFFERS)',
              'Table partitioning strategies for high-volume ledger tables',
              'Database locking levels: Optimistic vs. Pessimistic concurrency control'
            ],
            handsOnLab: 'Simulating 100 concurrent wallet balance updates with zero balance discrepancies.',
            deliverable: 'Thread-safe financial ledger implementation tested with concurrency tests.'
          },
          {
            dayNumber: 3,
            title: 'Django vs. FastAPI: Enterprise Hybrid Architecture',
            focus: 'Leveraging Django Admin & ORM alongside high-speed FastAPI endpoints.',
            topics: [
              'When to choose Django: The power of Django Admin, ORM, and battle-tested ecosystem',
              'Building a hybrid service: Django for back-office admin + FastAPI for public high-speed API',
              'Django REST Framework (DRF) serializers, viewsets, and permissions',
              'Sharing database models across multiple Python microservices'
            ],
            handsOnLab: 'Setting up Django admin to manage products, served to users via FastAPI.',
            deliverable: 'Hybrid application combining Django Admin with high-speed async APIs.'
          },
          {
            dayNumber: 4,
            title: 'Event Streaming, Webhooks & Asynchronous Microservices',
            focus: 'Kafka/RabbitMQ integration, webhook delivery, and retries.',
            topics: [
              'Event-driven architectures using RabbitMQ / Kafka in Python',
              'Building a robust outgoing webhook delivery engine with exponential retries',
              'WebSocket bidirectional streaming for real-time live trading / updates',
              'OpenTelemetry instrumentation for tracing requests across microservices'
            ],
            handsOnLab: 'Building a webhook dispatcher that guarantees at-least-once delivery.',
            deliverable: 'Fault-tolerant webhook dispatcher with audit logs and replay triggers.'
          },
          {
            dayNumber: 5,
            title: 'Automated Testing, Pytest, Mocking & CI/CD Pipelines',
            focus: 'Pytest fixtures, factory-boy, test databases, and GitHub Actions.',
            topics: [
              'Writing comprehensive tests with Pytest: Fixtures, parametrization, and markers',
              'Mocking external third-party APIs using `respx` and `unittest.mock`',
              'Measuring test coverage with `pytest-cov` targeting >90% code coverage',
              'Building an automated GitHub Actions pipeline running linting (Ruff) and tests'
            ],
            handsOnLab: 'Writing 25 unit and integration tests covering the payment reconciliation engine.',
            deliverable: 'Automated CI pipeline passing all tests on every push.'
          },
          {
            dayNumber: 6,
            title: 'Production Deployment on AWS / Cloud & Capstone Review',
            focus: 'Gunicorn + Uvicorn workers, Nginx, cloud deployment, and final defense.',
            topics: [
              'Configuring production WSGI/ASGI servers: Gunicorn + Uvicorn worker tuning',
              'Deploying containerized Python applications on cloud virtual machines / ECS',
              'Setting up structured JSON logging, health check endpoints, and alert triggers',
              'Capstone project exhibitions, jury evaluation, and certification ceremony'
            ],
            handsOnLab: 'Deploying the complete Fintech Ledger application to a live cloud host.',
            deliverable: 'Live cloud URL with Swagger docs and frontend dashboard.'
          }
        ]
      }
    }
  },
  {
    id: 'jfs',
    title: 'Java Full Stack & Microservices',
    shortTitle: 'Java FS',
    tagline: 'Master enterprise-grade backend microservices with Spring Boot, Spring Cloud, Hibernate & modern React.',
    category: 'Full Stack Engineering',
    badge: 'High Placement Demand',
    level: 'Intermediate to Advanced',
    rating: 4.94,
    reviewsCount: 3950,
    studentsTrained: '38,000+',
    partnerColleges: '190+',
    heroGradient: 'from-orange-500 to-amber-600',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=compress&cs=tinysrgb&w=800',
    overview: 'Java powers over 70% of Fortune 500 enterprise architectures and is the #1 technology stack hired by top IT product and service companies. Master Spring Boot, Spring Security, Hibernate/JPA, microservices architecture, and cloud deployment paired with modern frontend frameworks.',
    prerequisites: ['Core Java object-oriented programming foundations'],
    toolsAndTech: ['Java 21', 'Spring Boot 3', 'Spring Cloud', 'Hibernate / JPA', 'PostgreSQL / MySQL', 'Docker', 'React.js', 'Maven', 'Postman'],
    careerRoles: ['Java Full Stack Developer', 'Spring Boot Backend Engineer', 'Enterprise Application Architect', 'Associate Software Engineer'],
    learningOutcomes: [
      'Build enterprise RESTful microservices with Spring Boot 3 and Spring Data JPA.',
      'Implement Spring Security with JWT authentication and OAuth2 protocols.',
      'Design distributed microservices with Eureka discovery, API Gateway, and resilient circuit breakers.',
      'Connect modern React frontend with Spring Boot backend services.'
    ],
    syllabi: {
      '3days': {
        durationLabel: '3-Day Fast-Track Workshop',
        hours: '18 Hours (6 hrs / day)',
        recommendedFor: 'Fast-track enterprise Java readiness for campus placements.',
        description: 'Build a production-grade Spring Boot 3 REST API with JPA and React integration.',
        capstoneTitle: 'Banking & Account Management Microservice',
        capstoneDescription: 'Secure core banking service handling user registrations, account balance queries, transfers, and transaction logs.',
        days: [
          {
            dayNumber: 1,
            title: 'Spring Boot 3 Fundamentals & REST APIs',
            focus: 'Inversion of Control (IoC), Dependency Injection, and Spring MVC.',
            topics: [
              'Spring Boot 3 features: Inversion of Control (IoC) & Dependency Injection (@Autowired, @Component)',
              'Building REST controllers (@RestController, @GetMapping, @PostMapping)',
              'Request validation with Jakarta Validation annotations (@NotNull, @Size)',
              'Global exception handling using @ControllerAdvice and ResponseEntity'
            ],
            handsOnLab: 'Creating 5 REST endpoints in Spring Boot with input validation.',
            deliverable: 'Functional REST controller tested and documented with Swagger/OpenAPI.'
          },
          {
            dayNumber: 2,
            title: 'Database Persistence with Spring Data JPA & Hibernate',
            focus: 'Entities, repositories, relational mappings, and MySQL/PostgreSQL.',
            topics: [
              'Object-Relational Mapping (ORM) concepts and Hibernate',
              'Entity design with @Entity, @Table, @Id, and @GeneratedValue',
              'Relational mappings: @OneToMany, @ManyToOne, and cascade options',
              'Spring Data JPA: JpaRepository methods and custom JPQL queries'
            ],
            handsOnLab: 'Connecting Spring Boot to PostgreSQL and writing repository query methods.',
            deliverable: 'Database-persisted service with relationship navigation.'
          },
          {
            dayNumber: 3,
            title: 'Spring Security Basics & React Frontend Integration',
            focus: 'Securing endpoints with JWT, CORS configuration, and React display.',
            topics: [
              'Spring Security filter chain architecture simplified',
              'Securing endpoints with stateless JWT authentication',
              'CORS configuration for frontend cross-origin requests',
              'Building a React UI consuming Spring Boot REST endpoints'
            ],
            handsOnLab: 'Connecting the React banking dashboard to the secured Spring Boot backend.',
            deliverable: 'Working full-stack Java application deployed and tested.'
          }
        ]
      },
      '5days': {
        durationLabel: '5-Day Comprehensive Bootcamp',
        hours: '30 Hours (6 hrs / day)',
        recommendedFor: 'Colleges preparing students for product company software engineering drives.',
        description: 'Comprehensive Spring Boot 3, Spring Security, microservice decomposition, and Docker deployment.',
        capstoneTitle: 'Scalable Healthcare Appointment & Diagnostic Booking System',
        capstoneDescription: 'Distributed microservice system featuring Patient Service, Doctor Scheduling Service, and Notification Gateway.',
        days: [
          {
            dayNumber: 1,
            title: 'Spring Boot 3 Architecture & Modern Java 21',
            focus: 'Records, sealed classes, pattern matching, and Spring Boot auto-configuration.',
            topics: [
              'Java 21 LTS features: Records as DTOs, Pattern Matching, Virtual Threads overview',
              'Spring Boot 3 internals: Auto-configuration and custom starters',
              'Layered design: Controller -> Service -> Repository -> Entity architecture',
              'Unit testing with JUnit 5 and Mockito'
            ],
            handsOnLab: 'Writing a clean Spring Boot microservice with comprehensive JUnit 5 tests.',
            deliverable: 'Clean service layer with 100% mocked unit test coverage.'
          },
          {
            dayNumber: 2,
            title: 'Spring Data JPA Mastery & Performance Optimization',
            focus: 'Optimizing database queries, pagination, caching, and transactions.',
            topics: [
              'Spring Data JPA pagination and sorting (Pageable, Page<T>)',
              'Resolving N+1 query problems with EntityGraphs and JOIN FETCH',
              'Declarative transaction management with @Transactional and isolation levels',
              'Auditing entities with Spring Data JPA (@CreatedDate, @LastModifiedDate)'
            ],
            handsOnLab: 'Optimizing a complex query reducing database roundtrips from 50 to 1.',
            deliverable: 'High-performance JPA repository with automated auditing fields.'
          },
          {
            dayNumber: 3,
            title: 'Enterprise Spring Security & JWT Implementation',
            focus: 'SecurityFilterChain, UserDetailsService, JWT filters, and password encoders.',
            topics: [
              'Custom SecurityFilterChain configuration in Spring Boot 3',
              'Password encoding with BCryptPasswordEncoder',
              'Custom OncePerRequestFilter for JWT validation and context population',
              'Method-level security with @PreAuthorize("hasRole(\'ADMIN\')")'
            ],
            handsOnLab: 'Implementing full login, registration, and token validation flow.',
            deliverable: 'Enterprise security module rejecting tampered or expired tokens.'
          },
          {
            dayNumber: 4,
            title: 'Microservices Architecture with Spring Cloud',
            focus: 'Service discovery, API Gateway, and resilient communication.',
            topics: [
              'Monolith to Microservices decomposition strategy',
              'Service Discovery with Netflix Eureka',
              'API Gateway routing, rate-limiting, and authentication filters',
              'Inter-service communication with OpenFeign declarative REST clients'
            ],
            handsOnLab: 'Running Eureka Server, API Gateway, and 2 microservices communicating via Feign.',
            deliverable: 'Working microservices mesh with automated service discovery.'
          },
          {
            dayNumber: 5,
            title: 'Resilience, Dockerization & Capstone Presentation',
            focus: 'Resilience4j Circuit Breaker, Docker Compose, and capstone defense.',
            topics: [
              'Circuit Breaker pattern with Resilience4j (fallback methods, retry logic)',
              'Centralized configuration with Spring Cloud Config',
              'Dockerizing Spring Boot microservices with layered JAR optimization',
              'Capstone project exhibitions, code reviews, and certification awards'
            ],
            handsOnLab: 'Launching the entire microservice ecosystem with Docker Compose.',
            deliverable: 'Turnkey containerized microservices suite with live demo.'
          }
        ]
      },
      '6days': {
        durationLabel: '6-Day Advanced Masterclass & FDP',
        hours: '36 Hours (6 hrs / day)',
        recommendedFor: 'Advanced engineering cohorts and Faculty Development Programs seeking MNC-level curriculum.',
        description: 'Industrial-grade Java enterprise systems: Kafka event streaming, distributed tracing, Kubernetes deployment, and performance profiling.',
        capstoneTitle: 'Enterprise Omnichannel Order Processing & Fulfillment Platform',
        capstoneDescription: 'Event-driven microservices architecture handling order placement, inventory reservations, payments, and notifications with Kafka.',
        days: [
          {
            dayNumber: 1,
            title: 'Java 21 Concurrency, Virtual Threads & Spring Internals',
            focus: 'Project Loom Virtual Threads, memory model, and high throughput.',
            topics: [
              'Project Loom Virtual Threads: Achieving 100,000 concurrent requests without thread exhaustion',
              'Benchmarking platform threads vs. virtual threads in Spring Boot 3.2+',
              'Deep dive into JVM memory: Heap, Stack, Metaspace, and Garbage Collection tuning',
              'Application monitoring with Spring Boot Actuator and Micrometer'
            ],
            handsOnLab: 'Running a load test with 50,000 concurrent requests on Virtual Threads.',
            deliverable: 'Comparative latency and CPU graph proving virtual thread efficiency.'
          },
          {
            dayNumber: 2,
            title: 'High-Performance JPA, Hibernate Caching & Multi-Tenancy',
            focus: 'Second-level caching with Redis/Ehcache, optimistic locking, and multi-tenancy.',
            topics: [
              'Hibernate First-Level vs. Second-Level Cache with Redis',
              'Optimistic concurrency control with @Version annotation to prevent race conditions',
              'Database multi-tenancy patterns: Schema-per-tenant vs. Discriminator column',
              'Database migration pipelines with Flyway in CI/CD'
            ],
            handsOnLab: 'Configuring second-level Redis cache for static product catalogs.',
            deliverable: 'JPA entity cache hitting 99% cache hit ratio on repeat reads.'
          },
          {
            dayNumber: 3,
            title: 'Advanced Spring Security, OAuth2 & Keycloak Integration',
            focus: 'Enterprise SSO, Keycloak Identity Provider, and token exchange.',
            topics: [
              'Enterprise Identity Providers: Setting up Keycloak as an OAuth2/OIDC server',
              'Spring Security OAuth2 Resource Server configuration',
              'Extracting custom claims and roles from JWTs',
              'Securing microservice-to-microservice calls with mTLS and client credentials'
            ],
            handsOnLab: 'Configuring Keycloak SSO login protecting the Spring Boot microservices.',
            deliverable: 'Single sign-on workflow functioning across frontend and backend.'
          },
          {
            dayNumber: 4,
            title: 'Event-Driven Microservices with Apache Kafka',
            focus: 'Kafka brokers, topics, consumer groups, idempotency, and saga pattern.',
            topics: [
              'Event-driven architectures: Kafka topics, partitions, and offset management',
              'Spring for Apache Kafka: KafkaTemplate and @KafkaListener configuration',
              'Implementing the Saga Pattern for distributed transactions across microservices',
              'Handling poison pills and configuring Dead Letter Topics (DLT)'
            ],
            handsOnLab: 'Implementing an asynchronous order payment and inventory deduction via Kafka.',
            deliverable: 'Decoupled event pipeline with automated rollback on payment failure.'
          },
          {
            dayNumber: 5,
            title: 'Distributed Observability: Tracing, Metrics & Logging',
            focus: 'Distributed tracing with Micrometer, OpenTelemetry, Zipkin, and Grafana.',
            topics: [
              'Distributed tracing concepts: TraceId, SpanId, and context propagation',
              'Integrating OpenTelemetry and Zipkin / Tempo with Spring Boot 3',
              'Centralized logging with ELK Stack (Elasticsearch, Logstash, Kibana) or Loki',
              'Building custom Actuator health indicators and Prometheus metrics'
            ],
            handsOnLab: 'Tracking a single request through API Gateway, Order Service, and Payment Service in Zipkin.',
            deliverable: 'Visual trace tree identifying exact millisecond bottlenecks across services.'
          },
          {
            dayNumber: 6,
            title: 'Kubernetes Deployment, CI/CD & Final Capstone Defense',
            focus: 'K8s manifests, Helm, cloud deployment, and technical capstone presentation.',
            topics: [
              'Packaging Spring Boot with Cloud Native Buildpacks (zero Dockerfile required)',
              'Writing Kubernetes manifests: Deployments, Services, ConfigMaps, Secrets, Ingress',
              'Configuring readiness and liveness probes connected to Actuator endpoints',
              'Capstone project presentations, architecture defense, and certification awards'
            ],
            handsOnLab: 'Deploying the entire Kafka-driven microservice system onto a Kubernetes cluster.',
            deliverable: 'Production repository, Kubernetes manifests, and live running cluster demo.'
          }
        ]
      }
    }
  },
  {
    id: 'ai-tools',
    title: 'AI Tools & Developer Productivity',
    shortTitle: 'AI Tools',
    tagline: 'Supercharge productivity, coding speed, research, prompt design & workflow automation with state-of-the-art AI tools.',
    category: 'Applied Deeptech',
    badge: 'Maximum Productivity',
    level: 'All Levels (Beginner to Pro)',
    rating: 4.96,
    reviewsCount: 4180,
    studentsTrained: '48,000+',
    partnerColleges: '250+',
    heroGradient: 'from-amber-400 via-orange-500 to-yellow-500',
    iconName: 'Wand2',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=compress&cs=tinysrgb&w=800',
    overview: 'The future belongs to professionals who wield AI tools like superpowers. This comprehensive masterclass trains students, developers, and professionals on mastering tools like Cursor, GitHub Copilot, v0.dev, Perplexity, Midjourney, Claude Artifacts, and prompt engineering frameworks to 10x output and quality.',
    prerequisites: ['Basic computer proficiency and curiosity to learn modern AI workflows'],
    toolsAndTech: ['Cursor IDE', 'GitHub Copilot', 'v0 by Vercel', 'ChatGPT Plus', 'Claude 3.5 Sonnet', 'Perplexity Pro', 'Midjourney', 'Bolt.new', 'Zapier Central'],
    careerRoles: ['AI-Augmented Developer', 'AI Solutions Consultant', 'Productivity Specialist', 'Technical Project Lead'],
    learningOutcomes: [
      'Master Cursor IDE for repository-level codebase understanding, refactoring, and debugging.',
      'Use prompt engineering frameworks to generate error-free code, documentation, and tests.',
      'Rapidly prototype production UI mockups with v0.dev and Claude Artifacts in minutes.',
      'Automate daily repetitive research, email, and reporting workflows using AI agents.'
    ],
    syllabi: {
      '3days': {
        durationLabel: '3-Day Fast-Track Workshop',
        hours: '18 Hours (6 hrs / day)',
        recommendedFor: 'Colleges and organizations seeking immediate productivity transformation for students and faculty.',
        description: 'Hands-on bootcamp on Cursor IDE, modern coding assistants, prompt frameworks, and rapid prototyping.',
        capstoneTitle: 'Complete MVP Built in 3 Hours with AI Tools',
        capstoneDescription: 'Building, testing, documenting, and launching a fully functional web tool using Cursor, v0, and Claude.',
        days: [
          {
            dayNumber: 1,
            title: 'Mastering Next-Gen IDEs: Cursor & GitHub Copilot',
            focus: 'Cursor AI rules, @codebase indexing, multi-file edits, and Copilot Chat.',
            topics: [
              'Setting up Cursor IDE and configuring `.cursorrules` for project-specific conventions',
              'Repository indexing: Using `@codebase`, `@docs`, `@files`, and `@git` tags effectively',
              'Multi-file refactoring and automated test generation in Cursor',
              'GitHub Copilot CLI and Copilot Workspace workflows'
            ],
            handsOnLab: 'Refactoring an existing messy 500-line codebase in 20 minutes with Cursor.',
            deliverable: 'Clean, documented, and tested repository refactored using AI assistants.'
          },
          {
            dayNumber: 2,
            title: 'Rapid UI Prototyping: v0.dev, Claude Artifacts & Bolt.new',
            focus: 'AI-assisted frontend creation, Tailwind generation, and component scaffolding.',
            topics: [
              'Prompt-to-UI engineering with v0 by Vercel and Claude Artifacts',
              'Transforming napkin sketches and screenshot mockups into clean React + Tailwind components',
              'Instant full-stack application prototyping with Bolt.new',
              'Exporting and integrating AI-generated components into clean Git repositories'
            ],
            handsOnLab: 'Generating a responsive SaaS landing page and dashboard from text prompts.',
            deliverable: 'Complete interactive UI exported and running in local development server.'
          },
          {
            dayNumber: 3,
            title: 'Research, Synthesis & Workflow Automation',
            focus: 'Perplexity, deep research, automated documentation, and live launch.',
            topics: [
              'Deep technical research using Perplexity Pro and Claude Projects',
              'Automating technical documentation, API specs, and README files with LLMs',
              'Creating automated email summaries and report generation workflows',
              'Publishing and deploying the final MVP to Vercel/Netlify live'
            ],
            handsOnLab: 'Building, testing, and deploying the complete capstone MVP with AI assistance.',
            deliverable: 'Live web application URL created end-to-end utilizing AI tools.'
          }
        ]
      },
      '5days': {
        durationLabel: '5-Day Comprehensive Bootcamp',
        hours: '30 Hours (6 hrs / day)',
        recommendedFor: 'Comprehensive institutional workshop turning every participant into a 10x AI-augmented builder.',
        description: 'Complete immersion into AI coding, visual asset creation, automated testing, agentic productivity, and enterprise workflows.',
        capstoneTitle: 'End-to-End Enterprise SaaS Product Launch with AI Tools',
        capstoneDescription: 'Full product build from customer research and wireframing to frontend, backend API, unit testing, and marketing assets.',
        days: [
          {
            dayNumber: 1,
            title: 'Prompt Engineering Frameworks & Advanced Cognitive Prompts',
            focus: 'System prompts, role-prompting, few-shot conditioning, and reasoning chains.',
            topics: [
              'Principles of frontier models (GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro)',
              'Prompt frameworks: CREATE, TRACE, and Chain-of-Density methodologies',
              'Configuring custom instructions and Claude Projects for persistent context',
              'Eliminating hallucinations and enforcing deterministic JSON responses'
            ],
            handsOnLab: 'Building a library of 10 customized prompt templates for daily software engineering tasks.',
            deliverable: 'Personalized Prompt Engineering toolkit in Markdown format.'
          },
          {
            dayNumber: 2,
            title: 'Cursor IDE Mastery & AI-Driven Refactoring',
            focus: 'Advanced Cursor configurations, custom linters, and code migrations.',
            topics: [
              'Configuring team-wide `.cursorrules` and project context memory',
              'Codebase modernization: Migrating legacy JavaScript to modern TypeScript with AI',
              'Automated bug hunting: feeding stack traces and logs to AI for instant root cause fixes',
              'Writing end-to-end unit and integration tests automatically with AI'
            ],
            handsOnLab: 'Migrating an open-source library from JavaScript to TypeScript in Cursor.',
            deliverable: 'Fully typed repository with passing unit tests generated via Cursor.'
          },
          {
            dayNumber: 3,
            title: 'Visual Design & Generative Media for Developers',
            focus: 'Midjourney, Stable Diffusion, Recraft, and brand asset generation.',
            topics: [
              'Generative image models: Midjourney parameters, stylize, and aspect ratios',
              'Generating vector icons, SVG illustrations, and app logos with Recraft',
              'Creating photorealistic marketing mockups and social media assets',
              'Integrating visual assets into modern web applications'
            ],
            handsOnLab: 'Generating an entire cohesive brand identity (logo, hero banners, app icons) with AI.',
            deliverable: 'Complete brand asset bundle ready for product deployment.'
          },
          {
            dayNumber: 4,
            title: 'Rapid Prototyping to Full-Stack Production with AI',
            focus: 'v0.dev, Bolt.new, database schema generation, and API scaffolding.',
            topics: [
              'From user story to working schema: generating PostgreSQL schemas with AI',
              'Scaffolding FastAPI / Express routes and mock data with Claude',
              'Connecting v0-generated frontends to real backend endpoints',
              'AI-assisted security auditing: scanning code for SQL injection and security leaks'
            ],
            handsOnLab: 'Scaffolding full-stack application backend and connecting to generated frontend.',
            deliverable: 'Working full-stack prototype connecting database to frontend UI.'
          },
          {
            dayNumber: 5,
            title: 'Personal Productivity Agents, Automation & Capstone Launch',
            focus: 'Zapier Central, browser automation, live deployment, and awards.',
            topics: [
              'Automating repetitive business workflows with Zapier / Make and AI integrations',
              'Setting up personal AI research digests summarizing GitHub trending repositories',
              'Deploying the final capstone project and conducting public presentations',
              'Certification ceremony and future AI roadmap'
            ],
            handsOnLab: 'Launching the full SaaS product online and demonstrating automated workflows.',
            deliverable: 'Live product URL, complete documentation, and GitHub repository.'
          }
        ]
      },
      '6days': {
        durationLabel: '6-Day Advanced Masterclass & FDP',
        hours: '36 Hours (6 hrs / day)',
        recommendedFor: 'Faculty Development Programs (FDP) & senior leadership wanting institutional AI transformation.',
        description: 'Exhaustive curriculum on AI tool mastery, custom internal tooling, AI-assisted curriculum design, research paper synthesis, and enterprise governance.',
        capstoneTitle: 'Institutional AI Copilot Suite & Productivity Knowledge Base',
        capstoneDescription: 'Customized suite of AI assistants, automated assignment evaluation workflows, and departmental documentation hubs.',
        days: [
          {
            dayNumber: 1,
            title: 'The AI Tooling Landscape & Strategic Architecture',
            focus: 'Evaluating frontier models, token costs, security, and selecting optimal tools.',
            topics: [
              'Comprehensive map of developer & productivity AI tools across the SDLC',
              'Security and IP considerations: What happens to company code inside LLM providers?',
              'Privacy-first local AI tools: PrivateGPT, Ollama, and local Cursor models',
              'Setting up institutional AI workspaces and shared prompt repositories'
            ],
            handsOnLab: 'Setting up an air-gapped local AI coding assistant on private hardware.',
            deliverable: 'Functional offline AI coding environment running 100% locally.'
          },
          {
            dayNumber: 2,
            title: 'Deep Engineering with Cursor & Modern Coding Assistants',
            focus: 'Enterprise `.cursorrules`, terminal agents, and deep code migrations.',
            topics: [
              'Writing modular `.cursorrules` supporting multi-package monorepos',
              'Using AI terminal agents (Aider, Warp AI, GitHub CLI) for automated Git workflows',
              'Automating documentation of legacy codebases with comprehensive docstrings and diagrams',
              'AI-assisted performance profiling and algorithmic optimization'
            ],
            handsOnLab: 'Documenting a 5,000-line legacy system with auto-generated Mermaid diagrams.',
            deliverable: 'Interactive documentation site with architecture diagrams and API specs.'
          },
          {
            dayNumber: 3,
            title: 'Rapid Prototyping & Generative UI Architecture',
            focus: 'v0, Claude Artifacts, Shadcn UI, and state management scaffolding.',
            topics: [
              'Best practices for prompt-driven UI generation with Shadcn UI and Tailwind',
              'Scaffolding responsive layouts, accessible forms, and dark-mode themes',
              'Generating synthetic test datasets in JSON/CSV for realistic UI states',
              'Exporting component hierarchies and maintaining clean Git commits'
            ],
            handsOnLab: 'Building a multi-screen administrative dashboard with data visualization charts.',
            deliverable: 'Production-ready React dashboard with zero placeholder mock text.'
          },
          {
            dayNumber: 4,
            title: 'Academic & Technical Research Automation with AI',
            focus: 'Perplexity, Consensus, Elicit, Scite, and literature review workflows.',
            topics: [
              'Conducting systematic literature reviews with AI research tools (Consensus, Elicit)',
              'Synthesizing 20+ research papers into comparative matrix tables in seconds',
              'Formulating research hypotheses and drafting grant proposals with AI guidance',
              'Citation verification, fact-checking, and ethical academic writing guidelines'
            ],
            handsOnLab: 'Conducting an automated literature review on a cutting-edge deeptech topic.',
            deliverable: '15-page literature synthesis report with verified IEEE/ACM citations.'
          },
          {
            dayNumber: 5,
            title: 'Workflow Automation & Custom Internal AI Tools',
            focus: 'Zapier, Make.com, custom GPTs, and API connectors.',
            topics: [
              'Building custom internal GPTs and Claude Projects for departmental tasks',
              'Connecting AI agents to Google Drive, Slack, Discord, and Email via webhooks',
              'Automated grading and personalized student feedback generation pipelines',
              'Building custom Streamlit utilities wrapping internal repetitive workflows'
            ],
            handsOnLab: 'Building an automated assignment grading and feedback assistant.',
            deliverable: 'Working internal grading tool providing rubric-based student evaluations.'
          },
          {
            dayNumber: 6,
            title: 'Capstone Defense, AI Policy Guidelines & Certification',
            focus: 'Institutional AI roadmaps, student presentations, and certification ceremony.',
            topics: [
              'Formulating institutional policies on student and faculty AI usage',
              'Assessing the future of agentic coding and job market expectations',
              'Capstone project exhibitions and peer evaluations',
              'Awarding Brainovision Masterclass Certificates and continuous learning community access'
            ],
            handsOnLab: 'Final project defense showcasing the complete AI-augmented product suite.',
            deliverable: 'Live product showcase, documentation, and institutional AI transformation roadmap.'
          }
        ]
      }
    }
  },
  {
    id: 'web-dev-ai',
    title: 'Web Development with AI Tools',
    shortTitle: 'Web Dev + AI',
    tagline: 'Build next-generation responsive, dynamic web applications accelerated with cutting-edge AI dev workflows.',
    category: 'Full Stack Engineering',
    badge: 'Modern Full Stack',
    level: 'Beginner to Intermediate',
    rating: 4.97,
    reviewsCount: 3740,
    studentsTrained: '36,000+',
    partnerColleges: '185+',
    heroGradient: 'from-orange-500 via-amber-500 to-yellow-400',
    iconName: 'Globe',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=compress&cs=tinysrgb&w=800',
    overview: 'Web development has fundamentally transformed. Modern web engineers do not write repetitive boilerplate from scratch—they orchestrate AI assistants, generative UI tools, and intelligent scaffolding to build production-grade web applications at 5x speed. Learn modern HTML5/CSS3/JavaScript, React, Next.js, and how to harness AI throughout every phase of web development.',
    prerequisites: ['Basic computer knowledge, eagerness to build interactive websites'],
    toolsAndTech: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'React.js', 'Next.js', 'Cursor IDE', 'v0.dev', 'GitHub Copilot', 'Vercel'],
    careerRoles: ['Modern Web Developer', 'Frontend Engineer', 'UI/UX Rapid Prototyper', 'Full Stack Associate'],
    learningOutcomes: [
      'Build mobile-first, pixel-perfect responsive websites with modern HTML, Tailwind CSS, and CSS Grid.',
      'Master modern JavaScript and React component architecture accelerated with AI copilots.',
      'Scaffold complex UI layouts in minutes using v0.dev and refine code in Cursor IDE.',
      'Deploy full-stack web applications with custom domains, analytics, and SEO optimization on Vercel.'
    ],
    syllabi: {
      '3days': {
        durationLabel: '3-Day Fast-Track Workshop',
        hours: '18 Hours (6 hrs / day)',
        recommendedFor: 'College students building their first modern, AI-accelerated web application.',
        description: 'From zero to deployed full web app using modern web standards and AI tools.',
        capstoneTitle: 'Modern Tech Conference & Hackathon Showcase Portal',
        capstoneDescription: 'A responsive web portal featuring speaker lineups, countdown timers, registration forms, and dark/light mode.',
        days: [
          {
            dayNumber: 1,
            title: 'Modern Web Foundations & AI-Powered Layouts',
            focus: 'HTML5 semantic tags, Tailwind CSS, mobile-first design, and AI UI generation.',
            topics: [
              'Semantic HTML5 structure and SEO accessibility essentials',
              'Tailwind CSS fundamentals: utility-first workflow, flexbox, and responsive grids',
              'Prompting AI (v0 / Claude) to generate clean, modern hero sections and cards',
              'Integrating Google Fonts, SVG icons, and modern color palettes'
            ],
            handsOnLab: 'Building a responsive hero section and navigation bar using AI scaffolding.',
            deliverable: 'Pixel-perfect mobile-responsive landing page header.'
          },
          {
            dayNumber: 2,
            title: 'Interactive JavaScript & React Component Architecture',
            focus: 'Modern JavaScript (ES6+), React components, state, and event handling.',
            topics: [
              'Modern JavaScript: arrow functions, destructuring, map/filter, async/await',
              'React fundamentals: components, props, useState for interactivity',
              'Building dark/light mode toggles with Tailwind and local storage',
              'Using Cursor IDE to generate interactive filters and tab switchers'
            ],
            handsOnLab: 'Building an interactive event schedule with filtering by category.',
            deliverable: 'Dynamic React interface with working interactive filters.'
          },
          {
            dayNumber: 3,
            title: 'Forms, APIs & Deploying with Custom Domains',
            focus: 'Form validation, API integration, Git, and Vercel cloud deployment.',
            topics: [
              'Handling form submissions and integrating with free APIs / Google Sheets',
              'Client-side validation with instant user feedback',
              'Version control with Git and GitHub basics',
              'Deploying the live website on Vercel with automated preview links'
            ],
            handsOnLab: 'Deploying the finished conference portal to Vercel and testing on mobile devices.',
            deliverable: 'Publicly accessible live website URL with working contact form.'
          }
        ]
      },
      '5days': {
        durationLabel: '5-Day Comprehensive Bootcamp',
        hours: '30 Hours (6 hrs / day)',
        recommendedFor: 'Colleges seeking complete web development mastery with modern AI dev tooling.',
        description: 'Complete web engineering lifecycle from responsive styling to Next.js full-stack features and deployment.',
        capstoneTitle: 'Interactive EdTech Workshop & Course Enrollment Portal',
        capstoneDescription: 'Full-featured web app with syllabus viewer, interactive search, testimonials slider, enrollment modal, and admin view.',
        days: [
          {
            dayNumber: 1,
            title: 'Semantic HTML5, CSS Grid, Flexbox & Tailwind CSS',
            focus: 'Modern CSS layout engines, responsive breakpoints, and utility classes.',
            topics: [
              'CSS Flexbox and 12-column CSS Grid deep dive',
              'Tailwind CSS setup, theme configuration, and custom design tokens',
              'Micro-interactions: Hover states, smooth transitions, and transform effects',
              'Prompt engineering for visual components with v0.dev'
            ],
            handsOnLab: 'Designing a responsive pricing table and feature grid with Tailwind.',
            deliverable: 'Flawless responsive UI adapting across mobile, tablet, and desktop.'
          },
          {
            dayNumber: 2,
            title: 'Modern JavaScript & TypeScript Fundamentals',
            focus: 'DOM manipulation, async/await, API fetching, and TypeScript basics.',
            topics: [
              'ES6+ modern syntax: Array methods, optional chaining, nullish coalescing',
              'Asynchronous JavaScript: Promises, `fetch()`, error handling with try/catch',
              'Introduction to TypeScript: Types, Interfaces, and component prop typing',
              'Using AI assistants to debug JavaScript errors and optimize algorithms'
            ],
            handsOnLab: 'Fetching external JSON data and dynamically rendering cards with search.',
            deliverable: 'Live searchable data grid fetching remote data.'
          },
          {
            dayNumber: 3,
            title: 'React 18 & Component-Driven Engineering',
            focus: 'React Hooks, reusable design systems, and animations with Framer Motion.',
            topics: [
              'Component reusability principles and clean prop drilling prevention',
              'Mastering React Hooks: useState, useEffect, useMemo, useRef',
              'Adding smooth animations with Framer Motion',
              'Scaffolding complex React UI components using Cursor and Claude Artifacts'
            ],
            handsOnLab: 'Building an interactive multi-step modal dialog with smooth Framer Motion animations.',
            deliverable: 'Polished modal flow with step transitions and validation.'
          },
          {
            dayNumber: 4,
            title: 'Full-Stack Next.js 14 App Router & API Routes',
            focus: 'Server Components, Client Components, dynamic routing, and API endpoints.',
            topics: [
              'Next.js 14 architecture: Server Components vs. Client Components',
              'Dynamic routing: Creating `/courses/[id]` syllabus pages effortlessly',
              'Building backend API route handlers (`route.ts`) in Next.js',
              'SEO optimization: metadata tags, Open Graph preview cards, and sitemaps'
            ],
            handsOnLab: 'Creating dynamic course detail pages that load customized syllabus content.',
            deliverable: 'Dynamic Next.js application with routing and API routes.'
          },
          {
            dayNumber: 5,
            title: 'Optimization, Lighthouse Auditing & Production Launch',
            focus: 'Web Vitals, performance tuning, automated testing, and capstone launch.',
            topics: [
              'Core Web Vitals: LCP, FID, CLS optimization and image optimization (`next/image`)',
              'Auditing site speed and accessibility with Google Lighthouse',
              'Automated deployment on Vercel with preview environments',
              'Capstone project exhibitions, code review, and certificate awards'
            ],
            handsOnLab: 'Running Lighthouse audits and fixing all performance bottlenecks to score >95.',
            deliverable: 'Live production URL with 95+ Lighthouse score and public portfolio showcase.'
          }
        ]
      },
      '6days': {
        durationLabel: '6-Day Advanced Masterclass & FDP',
        hours: '36 Hours (6 hrs / day)',
        recommendedFor: 'Advanced engineering cohorts and Faculty Development Programs seeking modern industry standards.',
        description: 'Exhaustive curriculum covering modern web engineering, AI-accelerated development, backend integration, analytics, and performance mastery.',
        capstoneTitle: 'Scalable Institutional Event Management & Workshop Platform',
        capstoneDescription: 'Enterprise portal with dynamic syllabus builder, college proposal generator, automated registration, and analytics dashboard.',
        days: [
          {
            dayNumber: 1,
            title: 'Modern Web Architecture & Design System Tokens',
            focus: 'Design tokens, typography, CSS variables, and building an institutional theme.',
            topics: [
              'Building a design system from scratch: Color tokens, typographic scale, spacing units',
              'CSS Variables, Tailwind plugin extensions, and dark-mode color harmony',
              'Glassmorphism and modern visual aesthetics: backdrops, borders, and ambient glow blobs',
              'Configuring Cursor IDE to enforce the team’s design system automatically'
            ],
            handsOnLab: 'Building a shared component library with Tailwind design tokens.',
            deliverable: 'Design system documentation and reusable component showcase.'
          },
          {
            dayNumber: 2,
            title: 'Advanced React Patterns & State Management',
            focus: 'Compound components, custom hooks, context, and animation frameworks.',
            topics: [
              'Advanced React patterns: Compound components, render props, slot patterns',
              'Custom hooks for localStorage, media queries, and window scroll position',
              'Building fluid micro-animations and scroll-driven effects with Framer Motion',
              'AI-assisted refactoring: Using Cursor to simplify complex React component trees'
            ],
            handsOnLab: 'Building an interactive multi-day syllabus timeline component with animated tabs.',
            deliverable: 'Smooth 3/5/6-day syllabus viewer component with day timeline navigation.'
          },
          {
            dayNumber: 3,
            title: 'Next.js App Router, SSR & Dynamic Syllabus Routing',
            focus: 'Server-side rendering, static site generation, and dynamic route segments.',
            topics: [
              'Deep dive into Next.js App Router: Layouts, Templates, Error boundaries, and Loading skeletons',
              'Static Site Generation (SSG) with `generateStaticParams` for blazing speed',
              'Dynamic routing: Building parameter-driven pages (`/syllabus/:trackId`)',
              'Server Actions for handling form submissions without manual API endpoints'
            ],
            handsOnLab: 'Implementing dynamic syllabus pages with pre-rendering for all 9 tech tracks.',
            deliverable: 'Dynamic routing architecture pre-rendering all tracks with sub-second page loads.'
          },
          {
            dayNumber: 4,
            title: 'Database Persistence, Prisma ORM & Authentication',
            focus: 'PostgreSQL, Prisma ORM, NextAuth / Clerk authentication, and user roles.',
            topics: [
              'Database modeling with Prisma ORM and cloud PostgreSQL (Neon / Supabase)',
              'Creating migrations and seed scripts with realistic workshop and syllabus data',
              'Implementing user authentication with Clerk or NextAuth.js',
              'Role-based access: Student dashboard vs. Faculty coordinator view'
            ],
            handsOnLab: 'Connecting the syllabus portal to a cloud PostgreSQL database using Prisma.',
            deliverable: 'Persistent database-driven portal saving user proposal requests.'
          },
          {
            dayNumber: 5,
            title: 'AI Integrations into Web Apps: RAG & Chatbots',
            focus: 'Embedding AI assistants into web apps, streaming responses, and Vercel AI SDK.',
            topics: [
              'Vercel AI SDK (`ai/react`): Building streaming chat interfaces in 15 lines of code',
              'Connecting the web app to an LLM to answer syllabus questions in real time',
              'Generating downloadable customized PDF proposals on the fly in the browser',
              'Handling errors, fallbacks, and offline states gracefully'
            ],
            handsOnLab: 'Embedding a streaming AI course counselor inside the workshop website.',
            deliverable: 'Live floating AI chatbot answering questions about workshop topics.'
          },
          {
            dayNumber: 6,
            title: 'Production Optimization, SEO, Deployment & Certification',
            focus: 'SEO audit, Core Web Vitals, custom domains, analytics, and final defense.',
            topics: [
              'Advanced SEO: Schema.org JSON-LD structured data for courses and events',
              'Core Web Vitals tuning: Font display swap, zero cumulative layout shift (CLS)',
              'Deploying to production on Vercel with custom domain and edge caching',
              'Capstone project exhibitions, code reviews, and certification awards'
            ],
            handsOnLab: 'Deploying the complete Institutional Event Platform with full SEO tags.',
            deliverable: 'Production live web URL with perfect 100 SEO & Accessibility score.'
          }
        ]
      }
    }
  },
  {
    id: 'ai-film-making',
    title: 'AI Film Making & Generative Cinema',
    shortTitle: 'AI Film Making',
    tagline: 'Master end-to-end AI film direction: screenplay writing, character consistency, video generation, voice cloning, and audio scoring in 48 hours.',
    category: 'Creative AI & Media',
    badge: '2-Day Offline Workshop',
    level: 'Beginner to Advanced (No Film Gear Required)',
    rating: 4.98,
    reviewsCount: 1940,
    studentsTrained: '18,500+',
    partnerColleges: '110+',
    heroGradient: 'from-rose-500 via-orange-500 to-amber-500',
    iconName: 'Film',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=compress&cs=tinysrgb&w=800',
    deliveryMode: 'Offline On-Campus Workshop',
    defaultDuration: '2days',
    overview: 'An intensive, hands-on offline college workshop where students learn to produce festival-grade cinematic short films using state-of-the-art Generative AI. Guided in-person by creative directors and prompt engineers, students write structured 3-act screenplays with Claude 3.5, generate photorealistic visual storyboards with Midjourney and Flux, synthesize cinematic video camera motions with Runway Gen-3 and Luma Dream Machine, clone character voices with ElevenLabs, compose original film scores with Suno AI, and edit a complete 4K short film premiered live on the college auditorium stage.',
    prerequisites: ['Laptop with Google Chrome or modern web browser', 'Passion for storytelling and visual creation (No prior video editing, camera gear, or programming required)'],
    toolsAndTech: ['Runway Gen-3 Alpha', 'Midjourney v6.1', 'Flux.1 Schnell', 'Luma Dream Machine', 'ElevenLabs Voice Studio', 'Suno AI v3.5', 'Claude 3.5 Sonnet', 'CapCut Pro AI', 'Hedra Lip-Sync', 'Topaz Video AI'],
    careerRoles: ['AI Film Director', 'Generative Media Creator', 'Prompt Cinematographer', 'Creative AI Technologist', 'AI Post-Production Specialist'],
    learningOutcomes: [
      'Write professional cinematic screenplays, director treatments, and shot lists with Claude 3.5.',
      'Achieve photorealistic keyframes with character, facial, and stylistic consistency using Midjourney and Flux.',
      'Direct dynamic camera movements (dolly, crane, pan, zoom, orbit) from static concepts using Runway Gen-3 and Luma.',
      'Produce studio-quality emotional character voice acting with ElevenLabs and original musical scores with Suno AI.',
      'Assemble, color-grade, sync dialogue, upscale to 4K, and premiere a complete AI short film on stage.'
    ],
    syllabi: {
      '2days': {
        durationLabel: '2-Day Intensive Offline Film Making Workshop',
        hours: '14 Hours (7 hrs / day)',
        recommendedFor: 'Colleges seeking a high-energy 48-hour on-campus creative-tech workshop where every student team produces and premieres a completed AI short film.',
        description: 'Complete 2-day on-campus film sprint: from screenplay ideation and photorealistic character consistency to dynamic video generation, AI voice acting, sound design, and auditorium screening.',
        capstoneTitle: 'Original 4K AI Short Film Auditorium Premiere',
        capstoneDescription: 'Teams direct, generate, edit, and premiere an original 2 to 3-minute AI cinematic short film with dialogue, original music, sound effects, and title cards before a campus jury.',
        days: [
          {
            dayNumber: 1,
            title: 'Screenwriting, Visual Worldbuilding & Character Consistency',
            focus: 'Narrative Architecture, Midjourney / Flux Prompting & Character Consistency Across Scenes',
            topics: [
              'The AI Cinema Revolution: Breakdown of modern studio generative filmmaking pipelines',
              'Screenwriting with Claude 3.5 Sonnet: 3-act story structure, visual beat sheets, and camera shot listing',
              'Photorealistic Image Generation with Midjourney v6.1 & Flux: Lens emulation (35mm anamorphic), focal lengths, and cinematic lighting setups',
              'Character & Stylistic Consistency: Utilizing reference weights, seed locking, face vectors, and IP-Adapter techniques across multiple scene angles',
              'Directing Motion with Runway Gen-3 & Luma Dream Machine: Converting static concept stills into cinematic camera motions (pans, tilts, dolly zooms, crane shots)'
            ],
            handsOnLab: 'Write an original 6-scene screenplay, generate consistent protagonist character sheets, and render the first 10 dynamic cinematic video shots.',
            deliverable: 'Approved visual screenplay, character consistency sheet, and 10 raw generated video sequences (MP4).'
          },
          {
            dayNumber: 2,
            title: 'AI Voice Acting, Sound Design, Video Assembly & Stage Premiere',
            focus: 'ElevenLabs Voice Synthesis, Suno AI Original Score, Lip-Syncing, Assembly & Live Auditorium Screening',
            topics: [
              'AI Voice Acting & Cloning with ElevenLabs: Emotional modulation, dialogue pacing, accent selection, and multilingual dubbing',
              'Cinematic Scoring & Audio Engineering with Suno AI v3.5: Composing thematic motifs, orchestral background tracks, and ambient Foley soundscapes',
              'AI Lip-Syncing & Facial Performance Capture: Synchronizing speech to character portraits using Hedra and LivePortrait',
              'Timeline Assembly & Post-Production in CapCut / DaVinci: Pacing, match cutting, motion transitions, color grading, and AI 4K upscaling with Topaz',
              'Offline Campus Film Festival: Live auditorium projection, jury evaluation, audience applause, and certificate distribution'
            ],
            handsOnLab: 'Assemble all video clips, align cloned character voice tracks, mix background music and sound effects, and render the final 1080p/4K master file.',
            deliverable: 'Finished 2 to 3-minute original AI Short Film with full audio, soundtrack, and credits premiered on stage.'
          }
        ]
      },
      '1day': {
        durationLabel: '1-Day Fast-Track AI Video Creator Workshop',
        hours: '8 Hours (Intensive Single-Day Sprint)',
        recommendedFor: 'College technical symposiums, media clubs, and fest workshops seeking immediate, viral video production results.',
        description: 'Accelerated single-day deep dive into prompt-to-video tools, crafting viral AI commercials, high-impact movie trailers, and visual teasers.',
        capstoneTitle: 'AI Commercial & Cinematic Teaser Trailer',
        capstoneDescription: 'Teams produce a high-impact 60-second commercial or film trailer with dynamic camera movement, synthetic voiceover, and original audio.',
        days: [
          {
            dayNumber: 1,
            title: 'Rapid AI Cinematography, Image-to-Video & Trailer Production',
            focus: 'Prompt-to-Image, Gen-3 Video Generation, Voice Synthesis & Rapid Trailer Assembly',
            topics: [
              'Cinematic prompt engineering: Visual styles, lighting setups, and camera angles',
              'Converting prompt images into motion shots with Runway Gen-3 and Luma',
              'Synthesizing narration with ElevenLabs and background music with Suno',
              'Rapid timeline assembly, beat-matching, and final export'
            ],
            handsOnLab: 'Generate 8 cinematic shots, add voiceover and music, and edit a 60-second teaser trailer.',
            deliverable: 'Complete 60-second cinematic teaser trailer exported in full HD.'
          }
        ]
      },
      '3days': {
        durationLabel: '3-Day Advanced Cinematic AI Studio & VFX Masterclass',
        hours: '21 Hours (7 hrs / day)',
        recommendedFor: 'Colleges seeking an extended production studio experience with VFX inpainting, 3D camera tracking, and deep narrative depth.',
        description: 'Comprehensive 3-day film school curriculum combining scriptwriting, advanced inpainting, multitrack audio engineering, and theatrical grading.',
        capstoneTitle: 'Multi-Scene Sci-Fi / Drama Short Film with Custom VFX',
        capstoneDescription: 'Full-length 4-minute short film featuring multiple locations, complex character dialogues, original orchestral score, and advanced AI VFX.',
        days: [
          {
            dayNumber: 1,
            title: 'Screenplay, Visual Worldbuilding & Character Consistency',
            focus: 'Storyboarding, Character Design & Prompt Mastery',
            topics: [
              'Loglines, character bibles, and multi-location treatments with Claude 3.5',
              'Midjourney & Flux photorealism: lighting, costume consistency, and camera framing',
              'Establishing continuity rules and seed persistence'
            ],
            handsOnLab: 'Generate a 12-scene storyboard and complete character model pack.',
            deliverable: 'Detailed visual screenplay with full shot breakdown.'
          },
          {
            dayNumber: 2,
            title: 'Advanced Motion Directing, Video-to-Video & AI Inpainting',
            focus: 'Camera Movement, Video Inpainting, and Generative VFX',
            topics: [
              'Runway Gen-3 motion brush, multi-motion control, and camera velocity curves',
              'Video-to-Video transformation and stylistic morphing',
              'AI inpainting to remove artifacts and replace background set elements'
            ],
            handsOnLab: 'Direct 20 dynamic video shots with camera motion and custom inpainting.',
            deliverable: 'Folder of approved cinematic takes ready for editorial timeline.'
          },
          {
            dayNumber: 3,
            title: 'Multitrack Audio Engineering, Color Grading & Theatrical Screening',
            focus: 'Audio Post-Production, Foley, Dialogue Mastering & Stage Exhibition',
            topics: [
              'ElevenLabs character dialogue mixing and room acoustic simulation',
              'Suno AI composition, stem separation, and audio ducking',
              'Cinematic color grading (LUTs), titles, credits, and 4K upscaling',
              'Grand campus screening, jury evaluation, and certificates'
            ],
            handsOnLab: 'Full post-production assembly and live auditorium screening.',
            deliverable: 'Festival-ready 4K short film with theatrical credits and original poster.'
          }
        ]
      }
    }
  },
  {
    id: 'robotics',
    title: 'Autonomous Robotics & Embedded Hardware Engineering',
    shortTitle: 'Robotics',
    tagline: 'Assemble microcontrollers, wire motor drivers, interface ultrasonic sensors, and build an autonomous obstacle-avoiding robot in 1 day.',
    category: 'Robotics & Hardware',
    badge: '1-Day Offline Workshop',
    level: 'Beginner to Intermediate (Hands-on Physical Hardware Kits)',
    rating: 4.96,
    reviewsCount: 2150,
    studentsTrained: '24,000+',
    partnerColleges: '140+',
    heroGradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    iconName: 'Cpu',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=compress&cs=tinysrgb&w=800',
    deliveryMode: 'Offline On-Campus Workshop',
    defaultDuration: '1day',
    overview: 'An electrifying 100% offline, hands-on hardware engineering workshop conducted directly at your college lab or auditorium. Every student team receives a physical robotics hardware kit comprising microcontrollers (Arduino / ESP32), L298N motor drivers, dual DC gear motors, HC-SR04 ultrasonic sonar sensors, and robot chassis. Guided in-person by embedded hardware engineers, students learn circuit schematic reading, breadboard wiring, embedded C programming, sensor calibration, and build an autonomous mobile robot that navigates real-world obstacle arenas in a thrilling campus competition.',
    prerequisites: ['Curiosity for electronics and physical mechanics', 'Basic familiarity with logical thinking or C/C++ syntax (prior hardware experience NOT required)'],
    toolsAndTech: ['Arduino Uno / ESP32', 'Arduino IDE', 'L298N Dual H-Bridge Driver', 'HC-SR04 Ultrasonic Sonar', 'Infrared (IR) Sensors', 'Embedded C/C++', 'PWM Motor Control', 'Serial Monitor Diagnostics', 'Physical Robot Chassis Kit'],
    careerRoles: ['Robotics Engineer', 'Embedded Systems Developer', 'IoT Hardware Engineer', 'Firmware Developer', 'Mechatronics Specialist'],
    learningOutcomes: [
      'Read electronics schematics, wire breadboards, and interface microcontrollers with real-world actuators.',
      'Program digital I/O pins, analog inputs, and Pulse Width Modulation (PWM) for precise motor speed regulation.',
      'Interface and calibrate ultrasonic sonar and infrared proximity sensors to read real-time distance measurements.',
      'Develop closed-loop autonomous navigation algorithms with obstacle detection, evasion, and recovery states.',
      'Compete in a live campus obstacle track tournament with physical robot time trials and awards.'
    ],
    syllabi: {
      '1day': {
        durationLabel: '1-Day Hands-on Hardware Workshop',
        hours: '8 Hours (Intensive Single-Day Lab)',
        recommendedFor: 'Engineering colleges seeking an impactful 1-day offline workshop where every student team builds and tests a working autonomous robot.',
        description: 'Complete hardware assembly to autonomous navigation: unboxing kits, circuit wiring, embedded C programming, sonar interfacing, and the live Campus Robotics Grand Prix.',
        capstoneTitle: 'Autonomous Obstacle-Avoiding Mobile Robot',
        capstoneDescription: 'Teams wire, code, and test an autonomous wheeled robot that navigates a complex physical maze and obstacle track without human intervention or collisions.',
        days: [
          {
            dayNumber: 1,
            title: 'Physical Assembly, Embedded C Programming & Autonomous Rover Grand Prix',
            focus: 'Hardware Kit Unboxing, Chassis Assembly, L298N Motor Driver Wiring, Sonar Interfacing & Live Arena Competition',
            topics: [
              'Microcontroller Architecture: Deep-dive into ATmega328P / ESP32, GPIO pins, registers, and power isolation',
              'Physical Robot Assembly: Mounting dual DC gear motors, caster wheels, and rigid acrylic chassis',
              'Motor Control Mechanics: Wiring L298N H-Bridge dual driver, direction switching, and PWM speed control in Embedded C',
              'Sensor Interfacing: Working principle of HC-SR04 ultrasonic sensors, sound wave time-of-flight math, and real-time distance calculation',
              'Autonomous Decision Logic: Implementing state machines for obstacle detection, stopping distance thresholding, and evasive turning maneuvers',
              'Campus Robotics Tournament: Time trials, obstacle arena navigation, speed testing, and certificate ceremony'
            ],
            handsOnLab: 'Assemble the physical robot kit, wire the breadboard circuit, write the navigation firmware in Arduino IDE, and tune the avoidance parameters in the obstacle arena.',
            deliverable: 'A fully assembled, programmed, and calibrated Autonomous Obstacle-Avoiding Mobile Robot successfully navigating the physical obstacle track.'
          }
        ]
      },
      '2days': {
        durationLabel: '2-Day IoT & Smart Autonomous Robotics Bootcamp',
        hours: '16 Hours (8 hrs / day)',
        recommendedFor: 'Colleges wanting a 2-day hands-on experience combining autonomous obstacle navigation with smartphone Bluetooth/WiFi teleoperation and IoT telemetry.',
        description: 'Comprehensive 2-day hardware bootcamp: Day 1 covers autonomous obstacle navigation; Day 2 adds wireless communication, smartphone app control, and telemetry data streaming.',
        capstoneTitle: 'Dual-Mode Autonomous & Smartphone-Controlled IoT Rover',
        capstoneDescription: 'Teams engineer a dual-mode robot capable of autonomous navigation and real-time manual override via a custom mobile app with live telemetry.',
        days: [
          {
            dayNumber: 1,
            title: 'Hardware Assembly, Motor Drivers & Autonomous Obstacle Navigation',
            focus: 'Chassis Assembly, Motor Driving, Sonar Sensors & Autonomous Collision Avoidance',
            topics: [
              'Embedded fundamentals, Arduino/ESP32 pinouts, and breadboard circuit power distribution',
              'Interfacing L298N H-Bridge motor drivers with dual DC gear motors using PWM',
              'HC-SR04 ultrasonic sensor math, ping routines, and trigger/echo timing',
              'Autonomous obstacle detection and 3-stage evasion state machine (Stop, Scan, Turn)'
            ],
            handsOnLab: 'Assemble hardware chassis and calibrate autonomous obstacle avoidance.',
            deliverable: 'Fully functional autonomous rover navigating obstacles.'
          },
          {
            dayNumber: 2,
            title: 'Wireless Teleoperation, Bluetooth/WiFi Interfacing & Mobile App Control',
            focus: 'ESP32 / HC-05 Bluetooth Integration, Wireless Serial Communication & Mobile App UI',
            topics: [
              'Wireless protocols: Bluetooth SPP vs BLE vs WiFi WebSockets for robotics control',
              'Interfacing Bluetooth modules with microcontroller serial UART pins',
              'Parsing command packets for forward, reverse, steering, and speed adjustment',
              'Dual-mode firmware switching: Toggling between autonomous mode and smartphone teleoperation',
              'Campus Maze Championship: Obstacle courses, time trials, and certificates'
            ],
            handsOnLab: 'Configure Bluetooth firmware, connect to smartphone controller app, and navigate the timed slalom track.',
            deliverable: 'Dual-mode autonomous and smartphone teleoperated mobile robot with live wireless control.'
          }
        ]
      },
      '3days': {
        durationLabel: '3-Day Advanced Robotics, ROS & Edge AI Masterclass',
        hours: '24 Hours (8 hrs / day)',
        recommendedFor: 'Advanced engineering students, ECE/EEE/Mech departments, and robotics clubs seeking edge vision and autonomous line-tracking.',
        description: 'Extended 3-day deep dive covering embedded hardware, PID line tracking, and camera-based edge detection.',
        capstoneTitle: 'Multi-Sensor Intelligent Arena Rover with Line & Obstacle Tracking',
        capstoneDescription: 'Advanced mobile robot utilizing sensor fusion (IR array + Ultrasonic + Gyro) to navigate high-speed tracks with PID control.',
        days: [
          {
            dayNumber: 1,
            title: 'Embedded Hardware, Kinematics & Power Distribution',
            focus: 'Robot Chassis, Microcontrollers, and High-Current Motor Interfacing',
            topics: [
              'Power isolation between logic circuits and motor inductive spikes',
              'Differential drive kinematics and encoder feedback principles',
              'PWM speed profiles and motor acceleration curves'
            ],
            handsOnLab: 'Assemble chassis, wire high-current battery pack, and verify motor velocity curves.',
            deliverable: 'Calibrated mobile platform with bi-directional motor control.'
          },
          {
            dayNumber: 2,
            title: 'Multi-Sensor Fusion & PID Line Following Algorithm',
            focus: 'Infrared Sensor Array, Sonar Fusion & Closed-Loop PID Control',
            topics: [
              'Calibrating 5-channel IR reflective sensor arrays for surface contrast',
              'Proportional-Integral-Derivative (PID) algorithm implementation for trajectory tracking',
              'Fusing ultrasonic sonar for dynamic obstacle interception while on line'
            ],
            handsOnLab: 'Tune PID constants (Kp, Ki, Kd) on a serpentine test track.',
            deliverable: 'High-speed autonomous line follower with obstacle stop & go capability.'
          },
          {
            dayNumber: 3,
            title: 'Edge AI Vision Integration, Wireless Telemetry & Grand Championship',
            focus: 'ESP32-CAM Edge Vision, Wireless Telemetry & Tournament',
            topics: [
              'Streaming video and color blob detection using ESP32-CAM module',
              'Visual target tracking and automated docking logic',
              'Live tournament race, final presentations, and industry certificate ceremony'
            ],
            handsOnLab: 'Mount camera module, configure target following, and compete in the grand championship.',
            deliverable: 'Vision-assisted intelligent mobile robot and competition rank certificate.'
          }
        ]
      }
    }
  }
];

export const getTrackById = (id: string): TrackData | undefined => {
  return TRACKS_DATA.find(t => t.id.toLowerCase() === id.toLowerCase());
};
