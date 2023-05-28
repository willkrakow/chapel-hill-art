import { useState } from "react";
import { useSubmit } from "react-router-dom";
import useArtists from "../../hooks/useArtists";
import Input from "../common/input";
import Form from "../common/form";
import Select from "../common/select";
import Button from "../common/button";

interface MuralFormData {
  id: number;
  title: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  image_url: string;
  artist_id: number | null;
}

interface ICreateMural {
  newId: number;
}

const CreateMural = ({ newId }: ICreateMural) => {
  const submit = useSubmit();
  const artists = useArtists();
  const [formData, setFormData] = useState<MuralFormData>({
    id: newId,
    title: "",
    address1: "",
    address2: "",
    city: "Chapel Hill",
    state: "NC",
    zip: "27514",
    image_url: "",
    artist_id: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeArtist = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      artist_id: +value,
    }));
  };

  const handleSubmit = async () => {
    const data = {
      id: newId,
      address1: formData.address1,
      address2: formData.address2,
      city: formData.city,
      state: formData.state,
      zip: +formData.zip,
      image_url: formData.image_url,
      artist_id: +(formData.artist_id || "0"),
      title: formData.title,
    };
    submit(data as any, {
      method: "POST",
      action: "/admin/murals",
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <Input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="address1">Address 1</label>
        <Input
          type="text"
          name="address1"
          value={formData.address1}
          onChange={handleChange}
        />
        <label htmlFor="address2">Address 2</label>
        <Input
          type="text"
          name="address2"
          value={formData.address2}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <Input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
        <label htmlFor="state">State</label>
        <Input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
        <label htmlFor="zip">Zip</label>
        <Input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
        <label htmlFor="image_url">Image URL</label>
        <Input
          type="text"
          name="image_url"
          value={formData.image_url}
          onChange={handleChange}
        />
        <label htmlFor="artist_id">Artist</label>
        <Select value={formData.artist_id || 0} onChange={handleChangeArtist}>
          <option value={0}>Select an artist</option>
          {artists.map((artist) => (
            <option key={artist.id} value={artist.id}>
              {artist.first_name} {artist.last_name}
            </option>
          ))}
        </Select>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default CreateMural;
