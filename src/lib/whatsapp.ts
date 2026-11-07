const phone = '5514996910796';
export function whatsappUrl(subject?: string): string {
  const message = subject
    ? `Olá! Conheci o trabalho da Artesanal pelo site e gostaria de conversar sobre ${subject}.`
    : 'Olá! Conheci o trabalho da Artesanal pelo site e gostaria de conversar sobre um projeto de móveis sob medida.';
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
