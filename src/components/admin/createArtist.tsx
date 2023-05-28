import { useState } from "react";
import { useSubmit } from "react-router-dom";
import Input from "../common/input";
import Form from "../common/form";
import Button from "../common/button";

interface ArtistFormData {
  id: number;
  first_name: string;
  last_name: string;
  slug: string;
}

interface ICreateArtist {
  newId: number;
}

const CreateArtist = ({ newId }: ICreateArtist) => {
  const submit = useSubmit();
  const [formData, setFormData] = useState<ArtistFormData>({
    id: newId,
    first_name: "",
    last_name: "",
    slug: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const data = {
      id: newId,
      first_name: formData.first_name,
      last_name: formData.last_name,
      slug: formData.slug,
    };
    submit(data as any, {
      method: "POST",
      action: "/admin/artists",
    });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <Input
          type="text"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
        <label htmlFor="last_name">Last Name</label>
        <Input
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        <label htmlFor="slug">Slug</label>
        <Input
          type="text"
          name="slug"
          value={formData.slug}
          onChange={handleChange}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default CreateArtist;
