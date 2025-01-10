export interface Patient {
  name: string;
  bed: string;
  age: number;
  gender: "Male" | "Female";
  procedure: {
    name: string;
    time: string;
    status: "on time" | "delayed" | "scheduled";
  };
  nextStep: {
    action: string;
    time: string;
    assignedTo: string;
  };
  nextCheck: Date;
  vitals: {
    hr: number;
    bp: string;
    temp: number;
    pain: number;
  };
}

// Helper function to create staggered check times
const createCheckTime = (minutesFromNow: number) => {
  return new Date(Date.now() + minutesFromNow * 60000);
};

export const patients: Patient[] = [
  {
    name: "Betina Langemark",
    age: 67,
    gender: "Female",
    bed: "A1",
    procedure: {
      name: "Total Hip Replacement",
      time: "10:30",
      status: "on time",
    },
    nextStep: {
      action: "Physiotherapy Assessment",
      time: "11:00",
      assignedTo: "Sarah PT",
    },
    nextCheck: createCheckTime(20),
    vitals: {
      hr: 72,
      bp: "125/85",
      temp: 36.8,
      pain: 0,
    },
  },
  {
    name: "Jelle Reichert",
    age: 45,
    gender: "Male",
    bed: "A2",
    procedure: {
      name: "ACL Reconstruction",
      time: "11:00",
      status: "scheduled",
    },
    nextStep: {
      action: "Wound Check",
      time: "11:45",
      assignedTo: "Nurse Chen",
    },
    nextCheck: createCheckTime(15),
    vitals: {
      hr: 68,
      bp: "130/80",
      temp: 36.5,
      pain: 0,
    },
  },
  {
    name: "Michael Frandsen",
    age: 52,
    gender: "Male",
    bed: "A3",
    procedure: {
      name: "Spinal Fusion L4-L5",
      time: "09:45",
      status: "delayed",
    },
    nextStep: {
      action: "Pain Management Review",
      time: "10:30",
      assignedTo: "Dr. Pain Team",
    },
    nextCheck: createCheckTime(5),
    vitals: {
      hr: 85,
      bp: "140/90",
      temp: 37.1,
      pain: 0,
    },
  },
  {
    name: "Katja Kjær Grønbæk",
    age: 73,
    gender: "Female",
    bed: "B1",
    procedure: {
      name: "Emergency Hip Fracture Repair",
      time: "10:45",
      status: "on time",
    },
    nextStep: {
      action: "Post-op X-ray",
      time: "11:15",
      assignedTo: "Radiology",
    },
    nextCheck: createCheckTime(25),
    vitals: {
      hr: 88,
      bp: "145/85",
      temp: 37.3,
      pain: 0,
    },
  },
  {
    name: "Madolina Christian",
    age: 29,
    gender: "Female",
    bed: "B2",
    procedure: {
      name: "Arthroscopic Rotator Cuff Repair",
      time: "13:00",
      status: "scheduled",
    },
    nextStep: {
      action: "Shoulder ROM Assessment",
      time: "12:00",
      assignedTo: "Physio Team",
    },
    nextCheck: createCheckTime(10),
    vitals: {
      hr: 65,
      bp: "118/75",
      temp: 36.6,
      pain: 0,
    },
  },
  {
    name: "Mikkel Dahlgaard",
    age: 34,
    gender: "Male",
    bed: "B3",
    procedure: {
      name: "Ankle ORIF",
      time: "09:30",
      status: "delayed",
    },
    nextStep: {
      action: "Neurovascular Check",
      time: "09:45",
      assignedTo: "Nurse Jensen",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 74,
      bp: "128/82",
      temp: 36.9,
      pain: 0,
    },
  },
  {
    name: "Pernille Nygaard Wigell",
    age: 58,
    gender: "Female",
    bed: "C1",
    procedure: {
      name: "Total Knee Arthroplasty",
      time: "10:00",
      status: "on time",
    },
    nextStep: {
      action: "Discharge Planning",
      time: "12:00",
      assignedTo: "Social Worker",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 68,
      bp: "132/78",
      temp: 36.4,
      pain: 0,
    },
  },
  {
    name: "Kirstine Kjær Boll",
    age: 41,
    gender: "Female",
    bed: "C2",
    procedure: {
      name: "Arthroscopic Meniscus Repair",
      time: "10:30",
      status: "on time",
    },
    nextStep: {
      action: "Knee ROM Exercise",
      time: "10:00",
      assignedTo: "Physio Team",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 70,
      bp: "120/75",
      temp: 36.7,
      pain: 0,
    },
  },
  {
    name: "Oliver Wiik Rasmussen",
    age: 62,
    gender: "Male",
    bed: "C3",
    procedure: {
      name: "Lumbar Laminectomy",
      time: "11:30",
      status: "scheduled",
    },
    nextStep: {
      action: "Mobilization Assessment",
      time: "10:30",
      assignedTo: "OT Team",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 72,
      bp: "138/88",
      temp: 36.5,
      pain: 0,
    },
  },
  {
    name: "Philip Michaelsen",
    age: 25,
    gender: "Male",
    bed: "D1",
    procedure: {
      name: "ACL Reconstruction with Meniscus Repair",
      time: "10:15",
      status: "on time",
    },
    nextStep: {
      action: "Cryotherapy",
      time: "10:15",
      assignedTo: "Nurse Chen",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 65,
      bp: "122/78",
      temp: 36.6,
      pain: 0,
    },
  },
  {
    name: "Joshua Clement",
    age: 48,
    gender: "Male",
    bed: "D2",
    procedure: {
      name: "Cervical Disc Replacement",
      time: "10:00",
      status: "on time",
    },
    nextStep: {
      action: "Neurological Assessment",
      time: "09:00",
      assignedTo: "Neuro Team",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 76,
      bp: "135/85",
      temp: 37.0,
      pain: 0,
    },
  },
  {
    name: "Hoa Hoang Tuyet",
    age: 69,
    gender: "Female",
    bed: "D3",
    procedure: {
      name: "Vertebroplasty T12",
      time: "09:40",
      status: "delayed",
    },
    nextStep: {
      action: "Pain Management Review",
      time: "09:45",
      assignedTo: "Pain Team",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 82,
      bp: "142/88",
      temp: 36.8,
      pain: 0,
    },
  },
  {
    name: "Ylva Pisters",
    age: 31,
    gender: "Female",
    bed: "E1",
    procedure: {
      name: "Carpal Tunnel Release",
      time: "12:00",
      status: "scheduled",
    },
    nextStep: {
      action: "Discharge Planning",
      time: "11:00",
      assignedTo: "Ward Nurse",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 68,
      bp: "118/72",
      temp: 36.5,
      pain: 0,
    },
  },
  {
    name: "Norman Pedersen",
    age: 78,
    gender: "Male",
    bed: "E2",
    procedure: {
      name: "Revision Total Knee Replacement",
      time: "10:00",
      status: "on time",
    },
    nextStep: {
      action: "DVT Prophylaxis",
      time: "10:15",
      assignedTo: "Nurse Jensen",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 78,
      bp: "145/90",
      temp: 37.2,
      pain: 0,
    },
  },
  {
    name: "Søren Straarup Rasmussen",
    age: 55,
    gender: "Male",
    bed: "E3",
    procedure: {
      name: "Shoulder Arthroscopy",
      time: "10:00",
      status: "on time",
    },
    nextStep: {
      action: "Shoulder ROM Exercise",
      time: "10:30",
      assignedTo: "Physio Team",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 70,
      bp: "128/82",
      temp: 36.7,
      pain: 0,
    },
  },
  {
    name: "Ashley Myers",
    age: 22,
    gender: "Female",
    bed: "F1",
    procedure: {
      name: "ORIF Tibial Plateau Fracture",
      time: "09:45",
      status: "on time",
    },
    nextStep: {
      action: "Post-op X-ray",
      time: "10:00",
      assignedTo: "Radiology",
    },
    nextCheck: new Date(Date.now() + 20 * 60000),
    vitals: {
      hr: 85,
      bp: "125/75",
      temp: 37.1,
      pain: 0,
    },
  },
];
