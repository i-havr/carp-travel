export const formatPhone = (input: string): string | undefined => {
  const numericInput = input.replace(/\D/g, '');
  const endsWithSpace = /\s$/.test(input);

  const match = numericInput.match(/^(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,3})$/);
  const wrongMatch = numericInput.match(
    /^(\d{0,3})(\d{0,2})(\d{0,2})(\d{0,3})(\d+)$/
  );

  if (match) {
    const formatted = `(${match[1]}) ${match[2]} ${match[3]} ${match[4]}`;
    return endsWithSpace ? formatted + ' ' : formatted;
  }

  if (wrongMatch) {
    const wrongFormatted = `(${wrongMatch[1]}) ${wrongMatch[2]} ${wrongMatch[3]} ${wrongMatch[4]} ${wrongMatch[5]}`;
    return endsWithSpace ? wrongFormatted + ' ' : wrongFormatted;
  }
};
