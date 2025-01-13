export type ObservationType = "realtime" | "manual";
export type Alertness = "Awake" | "Verbal" | "Pain" | "Unresponsive";

export interface Patient {
  id: string;
  name: string;
  bed: string;
  age: number;
  gender: "Male" | "Female";
  status: "Normal" | "Warning" | "Critical";
  alertness: Alertness;
  lastChecked: string;
  observationType: ObservationType;
  staff: {
    nurse: {
      name: string;
      image: string;
    };
    doctor: {
      name: string;
      image: string;
    };
  };
  vitals: {
    realtime: {
      heartRate: number;
      bloodPressure: string;
      o2Saturation: number;
      sysDia: string;
      temperature: number;
    };
    manual: {
      lastChecked: string;
      heartRate: number;
      bloodPressure: string;
      o2Saturation: number;
      sysDia: string;
      temperature: number;
    };
  };
  nextStep: {
    title: string;
    description: string;
    time: string;
    status: "On Time" | "Delayed" | "Completed";
  };
}

export const mockPatients: Patient[] = [
  {
    id: "1",
    name: "Pernille Nygaard Wigell",
    bed: "1A",
    age: 58,
    gender: "Female",
    status: "Normal",
    alertness: "Awake",
    lastChecked: "0:00",
    observationType: "realtime",
    staff: {
      nurse: {
        name: "Sarah Johnson",
        image: "/profiles/nurses/7.png",
      },
      doctor: {
        name: "Michael Chen",
        image: "/profiles/doctors/1.png",
      },
    },
    vitals: {
      realtime: {
        heartRate: 85,
        bloodPressure: "144/90",
        o2Saturation: 98,
        sysDia: "105/77",
        temperature: 37.2,
      },
      manual: {
        lastChecked: "0:00",
        heartRate: 82,
        bloodPressure: "138/88",
        o2Saturation: 97,
        sysDia: "102/75",
        temperature: 37.1,
      },
    },
    nextStep: {
      title: "Arthroscopic Rotator Cuff Repair",
      description: "Pain Management Review",
      time: "10:15am",
      status: "On Time",
    },
  },
  {
    id: "2",
    name: "Dave Reynolds",
    bed: "2B",
    age: 38,
    gender: "Male",
    status: "Warning",
    alertness: "Verbal",
    lastChecked: "2:30",
    observationType: "manual",
    staff: {
      nurse: {
        name: "Emma Wilson",
        image: "/profiles/nurses/2.png",
      },
      doctor: {
        name: "James Smith",
        image: "/profiles/doctors/2.png",
      },
    },
    vitals: {
      realtime: {
        heartRate: 92,
        bloodPressure: "150/95",
        o2Saturation: 95,
        sysDia: "110/80",
        temperature: 37.8,
      },
      manual: {
        lastChecked: "2:30",
        heartRate: 90,
        bloodPressure: "148/93",
        o2Saturation: 94,
        sysDia: "108/78",
        temperature: 37.6,
      },
    },
    nextStep: {
      title: "Post-Op Recovery",
      description: "Medication Review",
      time: "11:30am",
      status: "Delayed",
    },
  },
  {
    id: "3",
    name: "Sarah Thompson",
    bed: "3C",
    age: 62,
    gender: "Female",
    status: "Normal",
    alertness: "Awake",
    lastChecked: "1:15",
    observationType: "realtime",
    staff: {
      nurse: {
        name: "John Davis",
        image: "/profiles/nurses/3.png",
      },
      doctor: {
        name: "Lisa Wong",
        image: "/profiles/doctors/3.png",
      },
    },
    vitals: {
      realtime: {
        heartRate: 78,
        bloodPressure: "135/85",
        o2Saturation: 99,
        sysDia: "100/70",
        temperature: 36.9,
      },
      manual: {
        lastChecked: "1:15",
        heartRate: 76,
        bloodPressure: "132/82",
        o2Saturation: 98,
        sysDia: "98/68",
        temperature: 36.8,
      },
    },
    nextStep: {
      title: "Cardiac Assessment",
      description: "ECG Review",
      time: "2:00pm",
      status: "On Time",
    },
  },
  {
    id: "4",
    name: "Robert Martinez",
    bed: "4A",
    age: 51,
    gender: "Male",
    status: "Critical",
    alertness: "Unresponsive",
    lastChecked: "0:45",
    observationType: "realtime",
    staff: {
      nurse: {
        name: "Patricia Lee",
        image: "/profiles/nurses/4.png",
      },
      doctor: {
        name: "David Kim",
        image: "/profiles/doctors/4.png",
      },
    },
    vitals: {
      realtime: {
        heartRate: 105,
        bloodPressure: "160/100",
        o2Saturation: 93,
        sysDia: "115/85",
        temperature: 38.5,
      },
      manual: {
        lastChecked: "0:45",
        heartRate: 102,
        bloodPressure: "158/98",
        o2Saturation: 92,
        sysDia: "112/82",
        temperature: 38.3,
      },
    },
    nextStep: {
      title: "Intensive Care",
      description: "Blood Work Analysis",
      time: "9:45am",
      status: "Completed",
    },
  },
];
