import type { Schema, Struct } from '@strapi/strapi';

export interface FooterFooterLinks extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_links';
  info: {
    displayName: 'FooterLinks';
  };
  attributes: {
    FooterPageLink: Schema.Attribute.String;
    FooterPageText: Schema.Attribute.String;
  };
}

export interface FooterSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    FooterSocialMediaImage: Schema.Attribute.Media<'images' | 'files'>;
    FooterSocialMediaLink: Schema.Attribute.String;
  };
}

export interface HeaderHeaderCompany extends Struct.ComponentSchema {
  collectionName: 'components_header_header_companies';
  info: {
    displayName: 'HeaderCompany';
  };
  attributes: {
    HeaderCompanyPageText: Schema.Attribute.String;
  };
}

export interface HeaderHeaderLinks extends Struct.ComponentSchema {
  collectionName: 'components_header_header_links';
  info: {
    displayName: 'HeaderLinks';
  };
  attributes: {
    HeaderPageLink: Schema.Attribute.String;
    HeaderPageText: Schema.Attribute.String;
  };
}

export interface HeaderHeaderLogo extends Struct.ComponentSchema {
  collectionName: 'components_header_header_logos';
  info: {
    description: '';
    displayName: 'HeaderLogo';
  };
  attributes: {
    HeaderLogoIcon: Schema.Attribute.Media<'images' | 'files'>;
    HeaderLogoImage: Schema.Attribute.Media<'images' | 'files'>;
    HeaderLogoLink: Schema.Attribute.String;
  };
}

export interface HomeHomeActionSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_action_secs';
  info: {
    displayName: 'HomeActionSec';
  };
  attributes: {
    ActionHeading: Schema.Attribute.Text;
  };
}

export interface HomeHomeAfterHero extends Struct.ComponentSchema {
  collectionName: 'components_home_home_after_heroes';
  info: {
    displayName: 'HomeAfterHero';
  };
  attributes: {
    AfterHeroTitle: Schema.Attribute.Text;
    AfterHeroTurningImg: Schema.Attribute.Media<'images' | 'files'>;
    CambridgeImage: Schema.Attribute.Media<'images' | 'files'>;
    RulaImage: Schema.Attribute.Media<'images' | 'files'>;
    SpotImage: Schema.Attribute.Media<'images' | 'files'>;
    StradaImage: Schema.Attribute.Media<'images' | 'files'>;
    UteesImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface HomeHomeBenifitHiddenSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_benifit_hidden_secs';
  info: {
    displayName: 'HomeBenifitHiddenSec';
  };
  attributes: {
    HiddenContent1: Schema.Attribute.Text;
    HiddenContent2: Schema.Attribute.Text;
    HiddenIcon: Schema.Attribute.Media<'images' | 'files'>;
    HiddenTitle: Schema.Attribute.Text;
  };
}

export interface HomeHomeBenifitSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_benifit_secs';
  info: {
    displayName: 'HomeBenifitSec';
  };
  attributes: {
    BenifitSecHeading: Schema.Attribute.Text;
  };
}

export interface HomeHomeHeroImage extends Struct.ComponentSchema {
  collectionName: 'components_home_home_hero_images';
  info: {
    displayName: 'HomeHeroImage';
  };
  attributes: {
    HeroImage: Schema.Attribute.Media<'images' | 'files'>;
    HeroImageLink: Schema.Attribute.String;
    HeroMobileImage: Schema.Attribute.Media<'images' | 'files'>;
    HeroPlayIcon: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface HomeHomeManualSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_manual_secs';
  info: {
    displayName: 'HomeManualSec';
  };
  attributes: {
    ManualOktaImage: Schema.Attribute.Media<'images' | 'files'>;
    ManualSecHeading: Schema.Attribute.Text;
    ManualSecKandjiImg: Schema.Attribute.Media<'images' | 'files'>;
    ManualSecOkta2Img: Schema.Attribute.Media<'images' | 'files'>;
    ManualSecTitle1: Schema.Attribute.Text;
    ManualSecTitle2: Schema.Attribute.Text;
    ManualSecTitle3: Schema.Attribute.Text;
    ManualSecZoomImg: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface HomeHomePage extends Struct.ComponentSchema {
  collectionName: 'components_home_home_pages';
  info: {
    displayName: 'HomePage';
  };
  attributes: {
    HeroSectionHeading: Schema.Attribute.Text;
    HeroSectionPara1: Schema.Attribute.Blocks;
    HeroSectionPara2: Schema.Attribute.Blocks;
  };
}

export interface HomeHomePreciseSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_precise_secs';
  info: {
    displayName: 'HomePreciseSec';
  };
  attributes: {
    PreciseHeading: Schema.Attribute.Text;
    PreciseImage: Schema.Attribute.Media<'images' | 'files'>;
    PreciseTitle1: Schema.Attribute.Text;
    PreciseTitle2: Schema.Attribute.Text;
    PreciseTitle3: Schema.Attribute.Text;
  };
}

export interface HomeHomePricingSec extends Struct.ComponentSchema {
  collectionName: 'components_home_home_pricing_secs';
  info: {
    displayName: 'HomePricingSec';
  };
  attributes: {
    PricingAppImg: Schema.Attribute.Media<'images' | 'files'>;
    PricingBillableImg: Schema.Attribute.Media<'images' | 'files'>;
    PricingExecutiveImg: Schema.Attribute.Media<'images' | 'files'>;
    PricingHeading: Schema.Attribute.Text;
  };
}

export interface HomeHomeStichWorks extends Struct.ComponentSchema {
  collectionName: 'components_home_home_stich_works';
  info: {
    displayName: 'HomeStichWorks';
  };
  attributes: {
    StichWorkImage: Schema.Attribute.Media<'images' | 'files'>;
    StichWorkPara1: Schema.Attribute.Blocks;
    StitchWorkHeading: Schema.Attribute.Text;
    StitchWorkPara2: Schema.Attribute.Blocks;
  };
}

export interface SharedBenifitCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_benifit_cards';
  info: {
    description: '';
    displayName: 'HomeBenifitCard';
  };
  attributes: {
    CardContent1: Schema.Attribute.Text;
    CardContent2: Schema.Attribute.Text;
    CardContent3: Schema.Attribute.Text;
    CardTitle: Schema.Attribute.Text;
    IconImage: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface SharedHomeActionCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_action_cards';
  info: {
    displayName: 'HomeActionCard';
  };
  attributes: {
    ActionContent: Schema.Attribute.Blocks;
    ActionIcon: Schema.Attribute.Media<'images' | 'files'>;
    ActionTitle: Schema.Attribute.Text;
  };
}

export interface SharedLogo extends Struct.ComponentSchema {
  collectionName: 'components_shared_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    LogoImage: Schema.Attribute.Media<'images' | 'files'>;
    LogoLink: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'footer.footer-links': FooterFooterLinks;
      'footer.social-media': FooterSocialMedia;
      'header.header-company': HeaderHeaderCompany;
      'header.header-links': HeaderHeaderLinks;
      'header.header-logo': HeaderHeaderLogo;
      'home.home-action-sec': HomeHomeActionSec;
      'home.home-after-hero': HomeHomeAfterHero;
      'home.home-benifit-hidden-sec': HomeHomeBenifitHiddenSec;
      'home.home-benifit-sec': HomeHomeBenifitSec;
      'home.home-hero-image': HomeHomeHeroImage;
      'home.home-manual-sec': HomeHomeManualSec;
      'home.home-page': HomeHomePage;
      'home.home-precise-sec': HomeHomePreciseSec;
      'home.home-pricing-sec': HomeHomePricingSec;
      'home.home-stich-works': HomeHomeStichWorks;
      'shared.benifit-card': SharedBenifitCard;
      'shared.home-action-card': SharedHomeActionCard;
      'shared.logo': SharedLogo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
