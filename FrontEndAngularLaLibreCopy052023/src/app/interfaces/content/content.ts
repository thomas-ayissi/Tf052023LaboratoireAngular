import * as url from "url";

export interface Content {
  indexContent: number;
  titleContent: string;
  authorContent: string;
  illustrationContentHead?: string;
  illustrationContentMain: string;
  textContentMain: string;
  categoryContent: 'text' | 'picture' | 'video' | 'sound' | 'trialOn';
  subCategoryContent: 'newsStory' | 'otherText' | 'photograph' | 'drawingLogoIcon' | 'banner'| 'newsMovie' | 'otherMovie' | 'newsSound' | 'otherSound';

}
