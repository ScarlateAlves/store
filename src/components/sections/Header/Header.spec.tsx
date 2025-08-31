import { render, screen, fireEvent } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { Header } from ".";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header", () => {
  it("should render correctly", () => {
    render(<Header />);

    expect(screen.getAllByText("Produtos")).toHaveLength(2);
  });

  it("render links correctly", () => {
    render(<Header />);

    const home = screen.getAllByRole("link", { name: /Home/i });
    expect(home[0]).toHaveAttribute("href", "/");

    const produtos = screen.getAllByRole("link", { name: /Produtos/i });
    expect(produtos[0]).toHaveAttribute("href", "/products");

    const sobre = screen.getAllByRole("link", { name: /Sobre/i });
    expect(sobre[0]).toHaveAttribute("href", "/about");

    const contato = screen.getAllByRole("link", { name: /Contato/i });
    expect(contato[0]).toHaveAttribute("href", "/contact");
  });
});
