using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace QuickSort
{
	class Program
	{
		static void swap(int[] arr, int i, int j)
		{
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
		static int partition(int[] arr, int low, int high)
		{
			int pivot = arr[high];

			int i = (low - 1);
			for (int j = low; j <= high; j++)
			{
				if (arr[j] < pivot)
				{
					i++;
					swap(arr, i, j);
				}
			}
			swap(arr, i + 1, high);
			return (i + 1);
		}
		static void quickSort(int[] arr, int low, int high)
		{
			if (low < high)
			{
				int par = partition(arr, low, high);
				quickSort(arr, low, par - 1);
				quickSort(arr, par + 1, high);
			}
		}
		static void Main(string[] args)
		{
			int[] arr = new int[] {2, 5, -3, 20, 241, 2, 23, 2301, 239, 21, 11, 1111};
			Console.WriteLine("Original Array:");
			foreach (var num in arr)
			{
				Console.WriteLine("{0}", num);
			}
			quickSort(arr, 0, arr.Length - 1);
			Console.WriteLine();
			Console.WriteLine("After sorting");
			foreach (var num in arr)
			{
				Console.WriteLine("{0}", num);
			}
			Console.WriteLine();
		}
	}
}
