export interface GalleryItem {
    id: number;
    title: string;
    src: string;
    likes: number;
    isLiked: boolean;
    comments: Comment[];
}

export interface Comment {
    autor: string;
    value: string;
}