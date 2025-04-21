export const getClass = (index, activeIndex) => {
  if (activeIndex === 0 && index === 0) {
    return "active";
  }
  if (index > activeIndex) {
    const difference = index - activeIndex;
    return difference <= 2 ? `next--slide--${difference}` : "";
  } else if (index < activeIndex) {
    const difference = activeIndex - index;
    return difference <= 2 ? `prev--slide--${difference}` : "";
  } else {
    return "active";
  }
};

export const data = [
  {
    text: "Why Study Abroad?",
    image:
      "https://cdn.pixabay.com/photo/2014/08/13/18/09/airline-417540_640.jpg",
  },
  {
    text: "Where and what to study?",
    image:
      "https://images.unsplash.com/photo-1512289984044-071903207f5e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "How do I Apply?",
    image:
      "https://images.unsplash.com/photo-1559711533-19d5cfd1b4cc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "Prepare to depart",
    image:
      "https://images.unsplash.com/photo-1558015613-6ce445b94c42?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    text: "Arrive and thrive",
    image:
      "https://images.unsplash.com/photo-1525396524423-64f7b55f5b33?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    text: "This is slide active 6",
    image:
      "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "This is slide active 7",
    image:
      "https://images.unsplash.com/photo-1521900092653-4bf38fcd896a?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "This is slide active 8",
    image:
      "https://images.unsplash.com/photo-1523238297026-56cea7f7e70b?q=80&w=2116&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "This is slide active 9",
    image:
      "https://plus.unsplash.com/premium_photo-1674343001705-40a1a7b80e44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    text: "This is slide active 10",
    image:
      "https://images.unsplash.com/photo-1548800687-96dc03940478?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
