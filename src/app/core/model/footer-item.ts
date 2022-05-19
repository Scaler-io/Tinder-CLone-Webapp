export interface FooterItemModel{
    headerTitle: string;
    isSocial: boolean;
    links: FooterItemLinkModel [];
}

export interface FooterItemLinkModel {
    linkText: string | null;
    linkUrl: string;
    isIcon: boolean;
    icon: string | null;
}


export class FooterItemModelData {
    public static getFooterItemData(): FooterItemModel [] {
        return <FooterItemModel[]>[
            { headerTitle: 'legal', isSocial: false, links: [
                {linkText: 'privacy', linkUrl: '/', isIcon: false, icon: null},
                {linkText: 'terms', linkUrl: '/', isIcon: false, icon: null},
                {linkText: 'cookie policy', linkUrl: '/', isIcon: false, icon: null},
                {linkText: 'intellectual property', linkUrl: '/', isIcon: false, icon: null},
            ]},
            { headerTitle: 'carrers', isSocial:false, links: [
                {linkText: 'carrers portal', linkUrl: '/', isIcon: false, icon: null},
                {linkText: 'tech blog', linkUrl: '/', isIcon: false, icon: null},
            ]},
            { headerTitle: 'social', isSocial: true, links: [
                {linkText: 'privacy', linkUrl: '/', isIcon: true, icon: 'instagram-icon'},
                {linkText: 'privacy', linkUrl: '/', isIcon: true, icon: 'tiktok-icon'},
                {linkText: 'privacy', linkUrl: '/', isIcon: true, icon: 'youtube-icon'},
                {linkText: 'privacy', linkUrl: '/', isIcon: true, icon: 'twitter-icon'},
                {linkText: 'privacy', linkUrl: '/', isIcon: true, icon: 'facebook-icon'},
            ]},
            { headerTitle: 'faq', isSocial: false, links: [
                {linkText: 'destinations', linkUrl: '/', isIcon: false, icon: null},
                {linkText: 'press room', linkUrl: '/', isIcon: false, icon: null},
                {linkText: 'contact', linkUrl: '/', isIcon: false, icon: null},
                {linkText: 'promo code', linkUrl: '/', isIcon: false, icon: null},
            ]}
        ];
    }
} 