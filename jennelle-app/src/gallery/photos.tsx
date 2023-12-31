import { ReactNode } from 'react';
import bunny from './bunny.webp';

export interface Photo {
    title: string,
    date: Date,
    description: string,
    image: ReactNode,
    tags: string[],
};

const photos: Photo[] = [
    {
        title: 'Bunny',
        date: new Date(2021, 5, 26),
        description: 'A bunny I saw on the way to work. Note: I did not actually take this photo.',
        image: <img src={bunny} alt="Bunny" />,
        tags: ['bunny', 'animal', 'cute'],
    },
];

// Adjust date to local timezone
photos.forEach(photo => {
    photo.date.setMinutes(photo.date.getMinutes() + photo.date.getTimezoneOffset());
});

export default photos;