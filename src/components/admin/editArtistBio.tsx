import { useState } from "react";
import { useSubmit } from "react-router-dom";
import Input from "../common/input";
import { IArtist } from "../../types/artists";
import Button from "../common/button";

interface ArtistBioForm {
    artist_id: number;
    description: string;
    image_url: string;
    website: string;
    company: string;
}

interface IEditArtistBio {
    artist: IArtist;
}


const EditArtistBio = ({artist}: IEditArtistBio) => {
    const submit = useSubmit();
    const [formData, setFormData] = useState<ArtistBioForm>({
        artist_id: artist.id,
        description: artist.description,
        image_url: artist.image_url,
        website: artist.website,
        company: artist.company,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = async () => {
        const data = {
            artist_id: artist.id,
            description: formData.description,
            image_url: formData.image_url,
            website: formData.website,
            company: formData.company,
        };
        submit(data as any, {
            method: "POST",
            action: "/admin/artist-bios",
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Description</label>
            <Input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
            />
            <label htmlFor="image_url">Image URL</label>
            <Input
                type="text"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
            />
            <label htmlFor="website">Website</label>
            <Input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
            />
            <label htmlFor="company_name">Company</label>
            <Input
                type="text"
                name="company_name"
                value={formData.company}
                onChange={handleChange}
            />
            <Button type="submit">Submit</Button>
        </form>
    )
}

export default EditArtistBio