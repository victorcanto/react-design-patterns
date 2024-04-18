import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import styled from "styled-components";
import { postQuote, resetQuotes } from "../../api";

const Container = styled.div`
  padding: 8px;
  max-width: 2xl;
  margin: auto;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2xl;
  margin-bottom: 4px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: lg;
  margin: auto;
  text-align: left;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button<{ isLoading?: boolean }>`
  background-color: ${(props) => (props.isLoading ? "#CBD5E0" : "#4299E1")};
  color: ${(props) => (props.isLoading ? "#A0AEC0" : "#fff")};
  padding: 12px 16px;
  border: none;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
`;

const UpdateQuotes = () => {
  // Get access to the QueryClient instance
  const queryClient = useQueryClient();
  // Quotes mutations
  const createQuoteMutation = useMutation(postQuote);
  const resetQuotesMutation = useMutation(resetQuotes);
  // Form state
  const [form, setForm] = useState({
    author: "",
    quote: "",
  });
  // Update the form state on change
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((_form) => ({
      ..._form,
      [e.target.name]: e.target.value,
    }));
  };
  // Validate the form and start create quote mutation
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { author, quote } = form;
    if (!author || !quote) {
      alert("Please provide quote and author text.");
      return;
    }
    createQuoteMutation.mutate(form, {
      onSuccess: () => {
        setForm({
          quote: "",
          author: "",
        });
        // Tell React-Query to refetch 'top-quotes' and 'quotes' queries
        queryClient.invalidateQueries("top-quotes");
        toast.success("Quote created");
      },
    });
  };
  // Reset the quotes to their original state on the server
  const onReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    resetQuotesMutation.mutate(e as unknown as void, {
      onSuccess: () => {
        queryClient.invalidateQueries("top-quotes");
        toast.success("Quote resetted.");
      },
    });
  };
  return (
    <Container>
      <Title>Create quote</Title>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Author</Label>
          <Input
            type="text"
            name="author"
            value={form.author}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Quote</Label>
          <Input
            type="text"
            name="quote"
            value={form.quote}
            onChange={onChange}
          />
        </FormGroup>
        <div style={{ textAlign: "center" }}>
          <Button
            type="submit"
            isLoading={createQuoteMutation.isLoading}
            disabled={createQuoteMutation.isLoading}
          >
            {createQuoteMutation.isLoading
              ? "Creating quote..."
              : "Create quote"}
          </Button>
          <Button
            type="button"
            onClick={onReset}
            isLoading={resetQuotesMutation.isLoading}
            disabled={resetQuotesMutation.isLoading}
          >
            {resetQuotesMutation.isLoading ? "Resetting..." : "Reset quotes"}
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default UpdateQuotes;
