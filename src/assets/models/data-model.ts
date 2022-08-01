export interface GoogleBook{
  inWishlist?: boolean;
  kind?: string;
  id: string;
  etag?: string;
  selfLink?: string;
  volumeInfo?: {
    title?: string;
    authors?: string[];
    publishedDate?: number;
    pageCount?: number;
    industryIdentifiers?: [
      {
        type?: string;
        identifier?: string;
      }
    ],
    readingModes?: {
      text?: boolean;
      image?: boolean;
    },
    description?: string;
    printType?: string;
    maturityRating?: string;
    allowAnonLogging?: boolean;
    contentVersion?: string;
    panelizationSummary?: {
      containsEpubBubbles?: boolean;
      containsImageBubbles?: boolean;
    },
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    },
    language?: string;
    previewLink?: string;
    infoLink?: string;
    canonicalVolumeLink?: string;
  },
  saleInfo?: {
    country?: string;
    saleability?: string;
    isEbook?: boolean;
  },
  accessInfo?: {
    country?: string;
    viewability?: string
    embeddable?: boolean;
    publicDomain?: boolean;
    textToSpeechPermission?: string;
    epub?: {
      isAvailable?: boolean;
    },
    pdf?: {
      isAvailable?: boolean;
    },
    webReaderLink?: string;
    accessViewStatus?: boolean;
    quoteSharingAllowed?: boolean;
  },
  searchInfo?: {
    textSnippet?: string;
  }
}

export interface ApiResult {
  items: GoogleBook[];
  kind: string;
  totalItems: number;
}

