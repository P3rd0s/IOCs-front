export enum IOC_TYPE {
  Email = 'Email', //<mat-icon> email</mat-icon>
  URL = 'URL', //<mat-icon>http</mat-icon> <mat-icon>public</mat-icon>
  IP = 'IP', //<mat-icon>language</mat-icon>
  Host = 'Host', //<mat-icon>dns</mat-icon> <mat-icon>device_hub</mat-icon>
  Filepath = 'Filepath', //<mat-icon>folder</mat-icon>
  Filename = 'Filename', //<mat-icon>extension</mat-icon> <mat-icon>launch</mat-icon>
  Registry = 'Registry', //<mat-icon>settings_applications</mat-icon>
  MD5 = 'MD5', //<mat-icon>perm_media</mat-icon> <mat-icon> vpn_key</mat-icon> <mat-icon>more</mat-icon>
  SHA1 = 'SHA1',
  SHA256 = 'SHA256',
  CVE = 'CVE', //<mat-icon>report_problem</mat-icon>

  Search = 'Search'
}

export const IOC_TYPE_ICON: { [key: string]: string } = {
  Email: 'email',
  URL: 'public',
  IP: 'language',
  Host: 'device_hub',
  Filepath: 'folder',
  Filename: 'launch',
  Registry: 'settings_applications',
  MD5: 'vpn_key',
  SHA1: 'vpn_key',
  SHA256: 'vpn_key',
  CVE: 'report_problem',
  Search: 'search'
}

export const IOC_TYPE_COLOR: { [key: string]: string } = {
  Email: '#AAAAAA',
  URL: '#2cad84',
  IP: '#5AA454',
  Host: '#2c93ad',
  Filepath: '#ad2c86',
  Filename: '#ad2c53',
  Registry: '#ff0000',
  MD5: '#fee858',
  SHA1: '#716605',
  SHA256: '#C7B42C',
  CVE: '#920909'
}

export const IOC_TYPE_GRADIENT: { [key: string]: string } = {
  Email: 'linear-gradient(190deg, rgba(77,73,73,1) 0%, rgba(170,170,170,1) 100%)',
  URL: 'linear-gradient(322deg, rgba(44,173,132,1) 0%, rgba(26,118,89,1) 100%)',
  IP: 'linear-gradient(260deg, rgba(37,129,30,1) 0%, rgba(90,164,84,1) 100%)',
  Host: 'linear-gradient(43deg, rgba(44,147,173,1) 0%, rgba(27,99,118,1) 100%)',
  Filepath: 'linear-gradient(180deg, rgba(102,17,76,1) 0%, rgba(173,44,134,1) 100%)',
  Filename: 'linear-gradient(135deg, rgba(173,44,83,1) 0%, rgba(145,24,60,1) 100%)',
  Registry: 'linear-gradient(135deg, rgba(109,23,23,1) 0%, rgba(255,0,0,1) 100%)',
  MD5: 'linear-gradient(278deg, rgba(254,232,88,1) 0%, rgba(168,147,11,1) 100%)',
  SHA1: 'linear-gradient(278deg, rgba(113,102,5,1) 0%, rgba(186,175,74,1) 100%)',
  SHA256: 'linear-gradient(333deg, rgba(99,90,27,1) 0%, rgba(199,180,44,1) 100%)',
  CVE: 'linear-gradient(125deg, rgba(146,9,9,1) 0%, rgba(206,40,40,1) 100%)'
}
