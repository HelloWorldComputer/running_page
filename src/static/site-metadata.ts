interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: 'Running Page',
  siteUrl: 'http://xn--5gq955aoia.xn--ses554g/',
  logo: 'https://www.picgo.net/image/151741005814-.pic.WuYLQm',
  description: 'Personal site and blog',
  navLinks: [
    {
      name: 'X',
      url: 'https://x.com/idingxiaoshan',
    },
  
  ],
};

export default data;
