import { renderHook } from "@testing-library/react";
import { useNavigation } from "./useNavigation";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("useNavigation", () => {
  const items = [
    { id: "home", label: "Home", href: "/" },
    { id: "products", label: "Produtos", href: "/products" },
  ];

  it("active rota", () => {
    (usePathname as jest.Mock).mockReturnValue("/");

    const { result } = renderHook(() => useNavigation(items));

    expect(
      result.current &&
        result.current.navigationItems.find((i) => i.href === "/")?.isActive
    ).toBe(true);
    expect(
      result.current &&
        result.current.navigationItems.find((i) => i.href === "/products")
          ?.isActive
    ).toBe(false);
  });

  it("/product with active pathname start with /product", () => {
    (usePathname as jest.Mock).mockReturnValue("/products/123");

    const { result } = renderHook(() => useNavigation(items));

    expect(
      result.current &&
        result.current.navigationItems.find((i) => i.href === "/products")
          ?.isActive
    ).toBe(true);
    expect(
      result.current &&
        result.current.navigationItems.find((i) => i.href === "/")?.isActive
    ).toBe(false);
  });

  it("Return false if pathname not exit", () => {
    (usePathname as jest.Mock).mockReturnValue(null);

    const { result } = renderHook(() => useNavigation(items));

    expect(result.current).toBe(false);
  });
});
