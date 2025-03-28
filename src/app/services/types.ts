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
  amazon_product_url: string;
  asterisk: number;
  bestsellers_date: string;
  dagger: number;
  display_name: string;
  list_name: string;
  published_date: string;
  rank: number;
  rank_last_week: number;
  weeks_on_list: number;
  book_details: {
    age_group: string;
    author: string;
    contributor: string;
    contributor_note: string;
    description: string;
    price: string;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    title: string;
  }[];
  isbns: {
    isbn10: string;
    isbn13: string;
  }[];
  reviews: {
    article_chapter_link: string;
    book_review_link: string;
    first_chapter_link: string;
    sunday_review_link: string;
  }[];
}

interface ResponseBooks {
  copyright: string;
  last_modified: string;
  num_results: number;
  status: string;
  results: Book[];
}

export type { Category, ResponseCategories, Book, ResponseBooks };
