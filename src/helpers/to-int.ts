export const toInt = (text: any): number => {
    const parsedInt = parseInt(text, 10);
  
    return !Number.isNaN(parsedInt) ? parsedInt : 0;
  };
  