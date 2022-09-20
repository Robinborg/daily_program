using System;

public class bubbleSort
{
		static void Main(string[] args)
		{
			int[] arr = {99, 92, 42, 51, 29, 11};
			int temp = 0;
			for (int j = 0; j < arr.Length - 2; j++)
			{
				for (int i = 0; i < arr.Length - 2; i++)
				{
					if (arr[i] > arr[i + 1])
					{
					  temp = arr[i + 1];
					  arr[i + 1] = arr[i];
					  arr[i] = temp;
					}
				}
			}
		}
		Console.WriteLine("Sorted:");
		foreach (int num in arr)
		{
			Console.WriteLine(p + " ");
		}
}

