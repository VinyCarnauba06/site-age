export const company = {
  name: 'AGE – Aliança Gestão Empresarial',
  shortName: 'AGE',
  cnpj: '13.085.902/0001-10',
  registry: 'CRA-AL',
  phoneDisplay: '+55 82 99995-5841',
  phoneTel: '+5582999955841',
  whatsapp: '5582999955841',
  email: 'contato@age.adm.br',
  hours: 'Segunda a sexta, 07h30 às 18h00',
  instagram: 'https://instagram.com/age.maceio',
  address: {
    street: 'R. Dr. Antônio Cansanção, 439',
    district: 'Ponta Verde',
    city: 'Maceió',
    state: 'AL',
    zip: '57035-190',
  },
}

export const fullAddress = `${company.address.street}, ${company.address.district}, ${company.address.city} - ${company.address.state}, ${company.address.zip}`

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`
export const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`

export const whatsappLink = (text) =>
  `https://wa.me/${company.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const navLinks = [
  { label: 'Quem somos', href: '#sobre' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Contato', href: '#contato' },
]

export const services = [
  {
    icon: 'trending',
    title: 'Gestão financeira e balancetes',
    description:
      'Controle de fluxo de caixa, prestação de contas detalhada e previsão orçamentária para obras e manutenções.',
  },
  {
    icon: 'receipt',
    title: 'Emissão de boletos e cobrança',
    description:
      'Régua de cobrança automatizada e negociação extrajudicial humanizada para reduzir a inadimplência do condomínio.',
  },
  {
    icon: 'wrench',
    title: 'Departamento operacional',
    description:
      'Gestão de manutenções, contratos de terceirizados (elevadores, bombas) e adequação às normas de segurança.',
  },
  {
    icon: 'users',
    title: 'Organização de assembleias',
    description:
      'Elaboração de editais, condução técnica das reuniões, redação de atas e suporte jurídico para deliberações complexas.',
  },
]
