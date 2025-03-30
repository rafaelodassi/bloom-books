interface Category {
  uuid: string;
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
  updated: string;
}

interface ResponseCategories {
  copyright: string;
  num_results: number;
  status: string;
  results: Category[];
}

interface Book {
  uuid: string;
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  asterisk: number;
  author: string;
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  book_review_link: string;
  book_uri: string;
  contributor: string;
  contributor_note: string;
  dagger: number;
  description: string;
  first_chapter_link: string;
  price: string;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  weeks_on_list: number;
  buy_links: {
    name: string;
    url: string;
  }[];
  isbns: {
    isbn10: string;
    isbn13: string;
  }[];
}

interface ResponseBooks {
  copyright: string;
  last_modified: string;
  num_results: number;
  status: string;
  results: {
    display_name: string;
    list_name: string;
    list_name_encoded: string;
    next_published_date: string;
    normal_list_ends_at: number;
    previous_published_date: string;
    published_date: string;
    published_date_description: string;
    updated: string;
    corrections: unknown[];
    bestsellers_date: string;
    books: Book[];
  };
}

export type { Category, ResponseCategories, Book, ResponseBooks };
